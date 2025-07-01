import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ResultCard = ({ weatherData }) => {
  return (
    <div className="w-1/3 max-w-md mt-6 shadow-xl rounded-lg"
  sx={{
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.4)',
  }}>
    <Card >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {weatherData.city}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", fontSize: "1.2rem" }}>
          <ul className="list-none">
            <li>
              <strong>Weather: </strong>
              {weatherData.weather}
            </li>
            <li>
              <strong>Temperature: </strong>
              {weatherData.temp}
            </li>
            <li>
              <strong>Min Temperature: </strong>
              {weatherData.tempMin}
            </li>
            <li>
              <strong>Max Temperature: </strong>
              {weatherData.tempMax}
            </li>
            <li>
              <strong>Humidity: </strong>
              {weatherData.humidity}
            </li>
            <li>
              <strong>Windspeed: </strong>
              {weatherData.windSpeed}
            </li>
          </ul>
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
};

export default ResultCard;
