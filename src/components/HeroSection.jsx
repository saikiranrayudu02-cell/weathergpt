import React from "react";
import { CONFIG } from "../config";
import { Button } from "./ui/Button";
import { Phone, Sparkles, CloudSun, Mic } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid">
        <div className="hero-text">
          <div className="hero-pill">
            <Sparkles size={14} />
            <span>AI Voice Calling Assistant</span>
          </div>

          <h1 className="hero-title">{CONFIG.HERO_TITLE}</h1>

          <p className="hero-subtitle">{CONFIG.HERO_DESCRIPTION}</p>

          <div className="hero-actions">
            <Button href={`tel:${CONFIG.PHONE_NUMBER}`} variant="primary">
              <Phone size={18} />
              <span>Call VoiceWeatherGPT</span>
            </Button>
            <Button href="#how-it-works" variant="secondary">
              <span>How It Works</span>
            </Button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-header">
            <div className="ai-status-tag">
              <span className="pulse-dot"></span>
              <span>AI Voice Assistant Active</span>
            </div>
            <CloudSun size={24} color="#0284c7" />
          </div>

          <div className="voice-wave-container">
            <Mic size={20} color="#38bdf8" style={{ marginRight: 8 }} />
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
          </div>

          <div className="visual-quote">
            "What's the weather forecast in Hyderabad today?"
          </div>
        </div>
      </div>
    </section>
  );
};
