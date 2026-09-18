import React from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { CallAssistantCard } from "./components/CallAssistantCard";
import { HowItWorks } from "./components/HowItWorks";
import { ExampleQuestions } from "./components/ExampleQuestions";
import { WeatherCard } from "./components/WeatherCard";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main className="container main-content">
        <HeroSection />
        <CallAssistantCard />
        <HowItWorks />
        <ExampleQuestions />
        <WeatherCard />
      </main>
      <Footer />
    </>
  );
}
