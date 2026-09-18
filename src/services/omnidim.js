import { CONFIG } from "../config";

/**
 * Dispatch an outbound AI voice call using OmniDimension API
 * @param {string} rawPhoneNumber - Target phone number
 * @returns {Promise<{success: boolean, message: string, data?: any}>}
 */
export async function triggerVoiceCall(rawPhoneNumber) {
  if (!rawPhoneNumber || !rawPhoneNumber.trim()) {
    return {
      success: false,
      message: "Please enter a valid phone number.",
    };
  }

  let formattedNumber = rawPhoneNumber.trim().replace(/[\s\-\(\)]/g, "");

  // Auto-format Indian numbers if 10 digits provided
  if (/^\d{10}$/.test(formattedNumber)) {
    formattedNumber = `+91${formattedNumber}`;
  } else if (!formattedNumber.startsWith("+")) {
    formattedNumber = `+${formattedNumber}`;
  }

  const payload = {
    agent_id: CONFIG.OMNIDIM_AGENT_ID,
    to_number: formattedNumber,
  };

  const headers = {
    Authorization: `Bearer ${CONFIG.OMNIDIM_API_KEY}`,
    "Content-Type": "application/json",
  };

  // Try proxied URL first (prevents browser CORS errors), fallback to direct URL
  const targetUrls = [CONFIG.OMNIDIM_DISPATCH_URL, CONFIG.OMNIDIM_DIRECT_URL];
  let lastErrorMessage = "";

  for (const url of targetUrls) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && (data.success || data.requestId || data.status === "dispatched")) {
        return {
          success: true,
          message: `Call dispatched successfully! Your phone (${formattedNumber}) will ring in a few seconds.`,
          data,
        };
      } else {
        lastErrorMessage =
          data.error_description ||
          data.error ||
          data.message ||
          `Server returned status ${response.status}`;
        
        // If it's a valid API response error from OmniDimension (e.g. invalid phone format), don't retry fallback
        if (data.error || data.error_description) {
          return {
            success: false,
            message: lastErrorMessage,
            data,
          };
        }
      }
    } catch (error) {
      console.warn(`Attempt to call ${url} failed:`, error);
      lastErrorMessage = error.message || "Network request failed";
    }
  }

  return {
    success: false,
    message: `Unable to connect to OmniDimension API (${lastErrorMessage}). Please verify your network connection or dev server.`,
  };
}
