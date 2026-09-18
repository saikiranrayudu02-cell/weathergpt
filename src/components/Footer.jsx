import React from "react";
import { CONFIG } from "../config";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="brand">
            <span className="company-badge">{CONFIG.COMPANY_NAME}</span>
            <span className="app-title">{CONFIG.APP_NAME}</span>
          </div>
          <p className="footer-tagline">
            AI-powered conversational weather assistance.
          </p>
        </div>

        <p className="footer-tagline">
          © {new Date().getFullYear()} {CONFIG.COMPANY_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
