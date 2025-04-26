require('dotenv').config();
const express = require('express');
const axios = require('axios');
const rateLimit = require('express-rate-limit');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Rate Limiter
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // limit each IP to 5 requests/min
  message: "Too many requests. Please try again later."
});
app.use('/weather', limiter);

// Routes
app.get('/', (req, res) => res.render('weather', { weather: null, error: null }));

app.post('/weather', async (req, res) => {
  const city = req.body.city;
  const apiKey = process.env.WEATHER_API_KEY;

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await axios.get(url);
    const data = response.data;

    const weatherText = `It is ${data.main.temp}°C with ${data.weather[0].description} in ${data.name}`;
    res.render('weather', { weather: weatherText, error: null });

  } catch (err) {
    res.render('weather', { weather: null, error: "City not found or API error." });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
