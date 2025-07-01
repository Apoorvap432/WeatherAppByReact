import React, { use, useState, useEffect } from "react";
import { ToastContainer} from "react-toastify";
import Searchbar from "./components/Searchbar";
import ResultCard from "./components/ResultCard";
import clearsky from "./assets/clear-sky.png";
import clouds from "./assets/clouds.png";
import rainyday from "./assets/rainy-day.png";
import snow from "./assets/snow.png";
import thunderstorm from "./assets/thunderstorm.png";
import mistday from "./assets/mist-day.png";
import defaultImage from "./assets/default.png";

function App() {
  const [weatherData, setWeatherData] = useState(null); // State to hold weather data
  const [bgImage, setBgImage] = useState(""); // State to hold background image

  const weatherBackgrounds = {
    Clear: clearsky,
    Clouds: clouds,
    Rain: rainyday,
    Snow: snow,
    Thunderstorm: thunderstorm,
    Mist: mistday,
    Default: defaultImage,
  };

  useEffect(() => {
    if (weatherData && weatherData.weather) {
      const mainWeather = weatherData.weather.toLowerCase();
      const matchedKey = Object.keys(weatherBackgrounds).find((key) =>
        mainWeather.includes(key.toLowerCase())
      );
      const image =
        weatherBackgrounds[matchedKey] || weatherBackgrounds.Default;
      setBgImage(image);
    }
  }, [weatherData]);

  return (
    <>
      <div
        className="min-h-screen w-full flex flex-col items-center overflow-hidden"
        style={{
          backgroundImage: `url(${bgImage || "/assets/default.png"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 0.1s ease-in-out",
        }}
      >
        <Searchbar setWeatherData={setWeatherData} />
        {weatherData && <ResultCard weatherData={weatherData} />}
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </>
  );
}

export default App;
