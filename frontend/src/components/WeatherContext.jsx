// src/components/WeatherCard.jsx
import React from "react";

const WeatherCard = ({ city, temperature, condition }) => {
  return (
    <div className="bg-blue-100 rounded-xl p-4 shadow-md w-full max-w-sm">
      <h2 className="text-xl font-bold mb-2">{city}</h2>
      <p className="text-lg">{temperature}°C</p>
      <p className="text-sm text-gray-600">{condition}</p>
    </div>
  );
};

export default WeatherCard;