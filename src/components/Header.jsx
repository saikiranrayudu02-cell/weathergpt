import React from "react";
import { CONFIG } from "../config";
import { PhoneCall } from "lucide-react";

export const Header = () => {
  return (
    <header className="header">
      <div className="container header-nav">
        <div className="brand">
          <span className="company-badge">{CONFIG.COMPANY_NAME}</span>
          <span className="app-title">
            {CONFIG.APP_NAME}
          </span>
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="nav-link">
                How It Works
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
