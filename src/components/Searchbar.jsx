import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Searchbar = () => {
  let [city, setCity] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "636b81d02601b12bea76442b5fed1dbe"; 

  let getWeatherInfo = async() => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    
    let result = {
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      windSpeed: jsonResponse.wind.speed,
      weather: jsonResponse.weather[0].description
    };
    console.log(result);
  }
  

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
      <form className="w-screen flex flex-col justify-center text-center items-center" onSubmit={handleSubmit}>
        <TextField
        className="w-1/3"
          id="outlined-basic"
          label="Enter the city"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <Button className="w-1/8" variant="contained" type="submit">Search</Button>
      </form>
    </div>
  );
};

export default Searchbar;
