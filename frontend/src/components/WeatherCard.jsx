import { useState } from "react";
import axios from "axios"; 
weather

const WeatherCard = () => {
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token"); // Ensure token is stored here after login

      const response = await axios.get(
        `/api/weather?city=${city}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setForecast(response.data);
    } catch (error) {
      console.error("Weather fetch failed:", error.response?.data?.message || error.message);
      setForecast(null);
    }
    setLoading(false);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md max-w-md mx-auto my-6">
      <h2 className="text-xl font-semibold mb-2">🌦️ Weather Forecast</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter city (e.g. Pretoria)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border rounded px-2 py-1 w-full"
        />
        <button
          onClick={fetchWeather}
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
        >
          Get Forecast
        </button>
      </div>

      {loading && <p>Loading weather...</p>}

      {forecast && (
        <div className="space-y-3">
          <p className="text-lg font-bold">{forecast.city.name}, {forecast.city.country}</p>
          <div className="grid grid-cols-2 gap-4">
            {forecast.list.slice(0, 5).map((item, idx) => (
              <div
                key={idx}
                className="border rounded p-2 flex flex-col items-center"
              >
                <p className="font-semibold">
                  {new Date(item.dt_txt).toLocaleDateString("en-ZA", {
                    weekday: "short",
                    day: "numeric",
                    month: "short",
                  })}
                </p>
                <img
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                  alt="icon"
                />
                <p>{item.weather[0].main}</p>
                <p>{item.main.temp}°C</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
