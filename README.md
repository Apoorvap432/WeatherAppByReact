# 🌤️ Weather App

A modern, responsive weather application built with React that provides real-time weather information for any city in the world. Get current temperature, humidity, wind speed, and weather conditions with dynamic backgrounds that change based on the weather.

## ✨ Features

- **City Search**: Search weather information by city name
- **Real-time Weather Data**: Fetches current weather conditions using the OpenWeatherMap API
- **Dynamic Backgrounds**: Background images change based on weather conditions (clear sky, clouds, rain, snow, thunderstorm, mist)
- **Detailed Weather Info**: Displays:
  - Current temperature
  - Minimum and maximum temperature
  - Humidity level
  - Wind speed
  - Weather condition
- **Error Handling**: Toast notifications for invalid city searches and errors
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS
- **Modern UI**: Material-UI components for a polished look

## 🚀 Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: 
  - Tailwind CSS 
  - Material-UI
- **Notifications**: React Toastify
- **API**: OpenWeatherMap API
- **Dev Tools**: ESLint, PostCSS, Autoprefixer

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm (v7 or higher)

## 💾 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   - The app currently uses a hardcoded API key. For production, consider moving it to an `.env` file.

## 🏃 Running the Project

**Development Server**
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

**Build for Production**
```bash
npm run build
```

**Preview Production Build**
```bash
npm run preview
```

**Run ESLint**
```bash
npm run lint
```

## 📁 Project Structure

```
Weather-app/
├── src/
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React DOM entry point
│   ├── index.css               # Global styles
│   ├── components/
│   │   ├── Searchbar.jsx       # Search input component
│   │   └── ResultCard.jsx      # Weather display component
│   └── assets/                 # Weather background images
│       ├── clear-sky.png
│       ├── clouds.png
│       ├── rainy-day.png
│       ├── snow.png
│       ├── thunderstorm.png
│       ├── mist-day.png
│       └── default.png
├── public/                     # Static assets
├── index.html                  # HTML entry point
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── eslint.config.js            # ESLint configuration
└── package.json                # Project dependencies
```

## 🔧 How It Works

1. **Search Bar Component** (`Searchbar.jsx`)
   - User enters a city name
   - On submit, fetches weather data from OpenWeatherMap API
   - Returns structured weather information or displays error toast

2. **App Component** (`App.jsx`)
   - Manages weather data state
   - Maps weather conditions to background images
   - Displays search bar and results dynamically

3. **Result Card Component** (`ResultCard.jsx`)
   - Displays formatted weather information
   - Glass-morphism design with backdrop blur
   - Shows key metrics: temperature, humidity, wind speed, etc.

## 🌐 API Details

The app uses the **OpenWeatherMap API** (free tier):
- **Endpoint**: `https://api.openweathermap.org/data/2.5/weather`
- **Parameters**:
  - `q`: City name (required)
  - `appid`: API key (required)
  - `units`: Set to `metric` for Celsius

To use your own API key:
1. Sign up at [OpenWeatherMap](https://openweathermap.org/api)
2. Get your free API key
3. Replace the API key in `Searchbar.jsx`

## 📸 Screenshots

The app features beautiful, weather-responsive backgrounds:
- ☀️ Clear blue sky for sunny weather
- ☁️ Cloudy skies for overcast conditions
- 🌧️ Rainy backgrounds for precipitation
- ❄️ Snowy scenes for winter weather
- ⚡ Stormy skies for thunderstorms
- 🌫️ Misty backgrounds for fog/mist

## 🎨 Customization

### Adding Weather Backgrounds
1. Place new images in `src/assets/`
2. Import them in `App.jsx`
3. Add them to the `weatherBackgrounds` object

### Styling
- Modify `tailwind.config.js` for theme changes
- Update component styles using Tailwind classes or Material-UI `sx` prop

## 🐛 Known Limitations

- API key is currently hardcoded (should use environment variables in production)
- Limited to current weather data (no forecasts)
- Error messages use toast notifications (may be missed if dismissed)

## 🚀 Future Enhancements

- [ ] 5-day weather forecast
- [ ] Weather history
- [ ] Multiple city comparison
- [ ] Geolocation support
- [ ] Dark/Light theme toggle
- [ ] Save favorite cities
- [ ] Air quality index
- [ ] UV index
- [ ] Precipitation probability
- [ ] Weather alerts

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact & Support

For questions or issues, please create an issue on GitHub or reach out through the repository.

---

**Happy weather tracking! 🌦️**
