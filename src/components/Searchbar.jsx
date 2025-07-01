import React, { useState } from "react";
import { toast } from 'react-toastify';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Searchbar = ({ setWeatherData }) => {
  let [city, setCity] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "636b81d02601b12bea76442b5fed1dbe";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();

      if (jsonResponse.cod === 200) {
        // Check if the response is successful
        let result = {
          city: jsonResponse.name,
          temp: jsonResponse.main.temp,
          tempMin: jsonResponse.main.temp_min,
          tempMax: jsonResponse.main.temp_max,
          humidity: jsonResponse.main.humidity,
          windSpeed: jsonResponse.wind.speed,
          weather: jsonResponse.weather[0].main,
        };
        setWeatherData(result); // Assuming setWeatherData is passed as a prop
      } else {
        toast.error("City not found. Please enter a valid city name.");
        setWeatherData(null); // Clear previous data if city not found
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert(
        "An error occurred while fetching the weather data. Please try again."
      );
    }
  };

  let handleChange = (e) => {
    setCity(e.target.value); // Update the city state with the input value
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for weather in:", city);
    getWeatherInfo();
    setCity(""); // Clear the input field after submission
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">Enter the city to know the weather</h1>
      <form
        className="w-screen flex flex-col justify-center text-center items-center"
        onSubmit={handleSubmit}
      >
        <TextField
          className="w-1/3 max-w-md"
          id="outlined-basic"
          label="Enter the city"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <Button className="w-32 mt-4" variant="contained" type="submit">
          Search
        </Button>
        <br/>
      </form>
    </div>
  );
};

export default Searchbar;
