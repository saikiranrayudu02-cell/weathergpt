// VoiceWeatherGPT Configuration & Configurable Parameters
// All main content, parameters, and API keys are centralized here.
// Supports Vercel / Vite Environment Variables (prefixed with VITE_) with fallback defaults.

export const CONFIG = {
  APP_NAME: "VoiceWeatherGPT",
  COMPANY_NAME: "VISIONX",
  PHONE_NUMBER: import.meta.env.VITE_PHONE_NUMBER || "+91 XXXXX XXXXX",
  HERO_TITLE: "Your Weather. Just a Phone Call Away.",
  HERO_DESCRIPTION:
    "Talk naturally with our AI voice assistant and get real-time weather information using OpenWeather.",
  
  // AI Voice Calling Credentials
  OMNIDIM_API_KEY:
    import.meta.env.VITE_OMNIDIM_API_KEY || "eJuJf6EwmV3SXgRYRm3-XotcB2Uj0KYy92tLoXCuNqs",
  OMNIDIM_AGENT_ID: import.meta.env.VITE_OMNIDIM_AGENT_ID
    ? Number(import.meta.env.VITE_OMNIDIM_AGENT_ID)
    : 255478,
  
  // Proxied URL (works both locally via vite.config.js and on Vercel via vercel.json)
  OMNIDIM_DISPATCH_URL: "/api/omnidim/api/v1/calls/dispatch",
  OMNIDIM_DIRECT_URL: "https://backend.omnidim.io/api/v1/calls/dispatch",

  // Simple Weather Information Card (Placeholder / Configurable Demo Data)
  WEATHER_DEMO: {
    LOCATION: import.meta.env.VITE_WEATHER_LOCATION || "Hyderabad",
    TEMPERATURE: import.meta.env.VITE_WEATHER_TEMP || "29°C",
    CONDITION: import.meta.env.VITE_WEATHER_CONDITION || "Partly Cloudy",
    HUMIDITY: import.meta.env.VITE_WEATHER_HUMIDITY || "65%",
    WIND_SPEED: import.meta.env.VITE_WEATHER_WIND || "4.2 km/h",
  },

  // Steps for How It Works
  HOW_IT_WORKS_STEPS: [
    {
      stepNumber: "01",
      title: "Enter Phone",
      description: "Enter your phone number in the UI form.",
      icon: "PhoneCall",
    },
    {
      stepNumber: "02",
      title: "Receive AI Call",
      description: "Our AI voice assistant calls your phone instantly.",
      icon: "MessageSquare",
    },
    {
      stepNumber: "03",
      title: "Ask Weather",
      description: "Ask any weather question naturally and get instant voice answers.",
      icon: "Volume2",
    },
  ],

  // Example Questions Chips
  EXAMPLE_QUESTIONS: [
    "What's the weather today?",
    "Will it rain tomorrow?",
    "What's the temperature in Hyderabad?",
    "Weather in Vijayawada?",
    "What's the forecast?",
  ],
};
