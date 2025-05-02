# ☁️ Task 7: Advanced API Usage and External API Integration

**Level:** Expert  
**Objective:**  
- Use OpenWeatherMap external API  
- Fetch weather data for a city  
- Display response dynamically  
- Add error handling and rate limiting

---

## 🛠 Technologies Used

- Node.js + Express
- EJS
- axios
- express-rate-limit
- dotenv (for API key)

---

## 📁 Project Structure

task7_external_api/ ├── views/ │ └── weather.ejs ├── server.js ├── package.json ├── .env

---

## 🌦 Features

- Form to search for a **city's weather**
- Calls OpenWeatherMap API using `axios`
- Renders temperature & description dynamically
- Handles:
  - Wrong cities
  - Too many requests
  - API key errors

---

## 🧾 Setup

1. Add your `.env` file:
   WEATHER_API_KEY=your_api_key_here

2. Install & run:
   ```bash
   npm install
   node server.js
3. Visit:
   ```arduino
   http://localhost:3000/
🔍 Example Query
Input: Hyderabad
Output: It is 34°C with clear sky in Hyderabad.

