import React from "react";
import { CONFIG } from "../config";
import { Card } from "./ui/Card";
import { PhoneCall, MessageSquare, Volume2 } from "lucide-react";

export const HowItWorks = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "PhoneCall":
        return <PhoneCall size={22} />;
      case "MessageSquare":
        return <MessageSquare size={22} />;
      case "Volume2":
        return <Volume2 size={22} />;
      default:
        return <PhoneCall size={22} />;
    }
  };

  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="section-header">
        <span className="section-tag">Simple Process</span>
        <h2 className="section-title">How It Works</h2>
        <p>Get instant weather reports in 3 simple steps</p>
      </div>

      <div className="steps-grid">
        {CONFIG.HOW_IT_WORKS_STEPS.map((step, idx) => (
          <Card key={idx} hover className="step-card">
            <div className="step-number">{step.stepNumber}</div>
            <div className="step-icon-box">{getIcon(step.icon)}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};
