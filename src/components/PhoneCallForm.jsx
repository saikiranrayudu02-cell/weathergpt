import React, { useState } from "react";
import { Button } from "./ui/Button";
import { triggerVoiceCall } from "../services/omnidim";
import { Phone, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export const PhoneCallForm = ({ buttonText = "Trigger AI Voice Call", className = "" }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: string }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setStatus(null);
    setLoading(true);

    const result = await triggerVoiceCall(phoneNumber);

    setLoading(false);
    if (result.success) {
      setStatus({ type: "success", message: result.message });
      setPhoneNumber("");
    } else {
      setStatus({ type: "error", message: result.message });
    }
  };

  return (
    <form className={`phone-form ${className}`} onSubmit={handleSubmit}>
      <div className="phone-input-group">
        <div className="phone-input-wrapper">
          <Phone size={18} className="phone-input-icon" />
          <input
            type="tel"
            className="phone-input"
            placeholder="Enter mobile number (e.g. 9876543210)"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <Button type="submit" variant="primary" disabled={loading}>
          {loading ? (
            <>
              <Loader2 size={18} className="spin" style={{ animation: "spin 1s linear infinite" }} />
              <span>Initiating Call...</span>
            </>
          ) : (
            <>
              <Phone size={18} />
              <span>{buttonText}</span>
            </>
          )}
        </Button>
      </div>

      {status && (
        <div
          className={`alert-banner ${
            status.type === "success" ? "alert-success" : "alert-error"
          }`}
        >
          {status.type === "success" ? (
            <CheckCircle2 size={18} style={{ shrink: 0 }} />
          ) : (
            <AlertCircle size={18} style={{ shrink: 0 }} />
          )}
          <span>{status.message}</span>
        </div>
      )}
    </form>
  );
};
