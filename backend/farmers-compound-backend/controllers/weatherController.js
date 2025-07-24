const axios = require('axios');

const getWeather = async (req, res) => {
  const { city } = req.query; // You can also use lat/lon
  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!city) {
    return res.status(400).json({ message: 'City is required' });
  }

  try {
    const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    const response = await axios.get(weatherURL);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching weather data' });
  }
};

module.exports = { getWeather };