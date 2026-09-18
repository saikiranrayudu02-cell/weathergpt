import React from "react";
import { CONFIG } from "../config";
import { Card } from "./ui/Card";
import { MapPin, CloudSun, Droplets, Wind, Thermometer } from "lucide-react";

export const WeatherCard = ({ weather = CONFIG.WEATHER_DEMO }) => {
  return (
    <section className="weather-card-section">
      <div className="section-header">
        <span className="section-tag">Live Preview</span>
        <h2 className="section-title">Sample Weather Data Card</h2>
        <p>Structure for live OpenWeather API data integration</p>
      </div>

      <Card className="weather-demo-card">
        <div className="weather-header">
          <div className="weather-location">
            <MapPin size={20} color="#0284c7" />
            <span>{weather.LOCATION}</span>
          </div>
          <span className="demo-pill">Placeholder Demo Data</span>
        </div>

        <div className="weather-main-row">
          <div className="weather-temp">{weather.TEMPERATURE}</div>
          <div className="weather-condition">
            <CloudSun size={20} />
            <span>{weather.CONDITION}</span>
          </div>
        </div>

        <div className="weather-details-grid">
          <div className="weather-detail-item">
            <Droplets size={18} color="#0284c7" />
            <div>
              <div className="detail-label">Humidity</div>
              <div className="detail-value">{weather.HUMIDITY}</div>
            </div>
          </div>

          <div className="weather-detail-item">
            <Wind size={18} color="#0284c7" />
            <div>
              <div className="detail-label">Wind Speed</div>
              <div className="detail-value">{weather.WIND_SPEED}</div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};
