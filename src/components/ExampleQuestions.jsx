import React from "react";
import { CONFIG } from "../config";
import { HelpCircle } from "lucide-react";

export const ExampleQuestions = () => {
  return (
    <section className="example-questions-section">
      <div className="section-header">
        <span className="section-tag">Sample Queries</span>
        <h2 className="section-title">Example Questions</h2>
        <p>Things you can ask the AI voice assistant during your call</p>
      </div>

      <div className="questions-flex">
        {CONFIG.EXAMPLE_QUESTIONS.map((question, idx) => (
          <div key={idx} className="chip">
            <HelpCircle size={16} color="#0284c7" />
            <span>{question}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
