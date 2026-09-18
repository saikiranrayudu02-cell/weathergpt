import React from "react";
import { CONFIG } from "../config";
import { PhoneCallForm } from "./PhoneCallForm";
import { CheckCircle, Radio } from "lucide-react";

export const CallAssistantCard = () => {
  return (
    <section className="call-assistant-section">
      <div className="call-card-highlight">
        <div className="call-card-top">
          <h2 className="call-card-title">
            <Radio size={24} color="#38bdf8" />
            <span>Talk to {CONFIG.APP_NAME}</span>
          </h2>
          <p className="call-card-desc">
            Enter your mobile number below to receive an instant call from our AI voice assistant:
          </p>
        </div>

        <div className="sample-queries-list">
          <div className="sample-query-item">
            <CheckCircle size={16} color="#38bdf8" />
            <span>What's the weather in Hyderabad?</span>
          </div>
          <div className="sample-query-item">
            <CheckCircle size={16} color="#38bdf8" />
            <span>Will it rain tomorrow?</span>
          </div>
          <div className="sample-query-item">
            <CheckCircle size={16} color="#38bdf8" />
            <span>What's the temperature in Vijayawada?</span>
          </div>
        </div>

        <PhoneCallForm buttonText="Start Voice Call" />

        <div className="call-card-footer">
          <span className="pulse-dot"></span>
          <span>AI Voice Assistant • Ready for Weather Queries</span>
        </div>
      </div>
    </section>
  );
};
