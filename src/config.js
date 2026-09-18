// VoiceWeatherGPT Configuration & Configurable Parameters
// All main content, parameters, and OmniDimension API integration keys are centralized here.

export const CONFIG = {
  APP_NAME: "VoiceWeatherGPT",
  COMPANY_NAME: "VISIONX",
  PHONE_NUMBER: "+91 XXXXX XXXXX",
  HERO_TITLE: "Your Weather. Just a Phone Call Away.",
  HERO_DESCRIPTION:
    "Talk naturally with our AI voice assistant and get real-time weather information using OpenWeather.",
  
  // OmniDimension AI Voice Calling Credentials
  OMNIDIM_API_KEY: "eJuJf6EwmV3SXgRYRm3-XotcB2Uj0KYy92tLoXCuNqs",
  OMNIDIM_AGENT_ID: 255478, // VoiceWeatherGPT Agent ID
  
  // Proxied local URL to prevent CORS errors in browser, fallback to direct URL
  OMNIDIM_DISPATCH_URL: "/api/omnidim/api/v1/calls/dispatch",
  OMNIDIM_DIRECT_URL: "https://backend.omnidim.io/api/v1/calls/dispatch",

  // Simple Weather Information Card (Placeholder / Configurable Demo Data)
  WEATHER_DEMO: {
    LOCATION: "Hyderabad",
    TEMPERATURE: "29°C",
    CONDITION: "Partly Cloudy",
    HUMIDITY: "65%",
    WIND_SPEED: "4.2 km/h",
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
      description: "OmniDimension AI voice assistant calls your phone instantly.",
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
