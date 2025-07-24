// src/components/WeatherPage.jsx
import React from "react";
import WeatherCard from "./WeatherCard";

const WeatherPage = () => {
  // Mock test data — replace with API later
  const weatherData = {
    city: "Pretoria",
    temperature: 24,
    condition: "Partly Cloudy",
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <WeatherCard
        city={weatherData.city}
        temperature={weatherData.temperature}
        condition={weatherData.condition}
      />
    </div>
  );
};

export default WeatherPage;
