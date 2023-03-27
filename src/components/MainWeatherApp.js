import axios from "axios";
import React, { useEffect, useState } from "react";
import DisplayWeather from "./DisplayWeather";
import WeatherForm from "./WeatherForm";

const MainWeatherApp = () => {
    const [userInput, setuserInput] = useState();
  const [apiData, setApiData] = useState();
  const [displayWeather, setDisplayWeather] = useState(false);

  const weatherApi = async () => {
    console.log("APIIIII");
    if (userInput.city && userInput.country) {
      const fetchAPI = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${userInput.city},${userInput.country}&appid=5d7641af55dc4a94632112043840f290`
      );
      if (fetchAPI.status === 200) {
        setDisplayWeather(true);
        setApiData(fetchAPI.data);
      } else {
        setDisplayWeather(false);
      }
    } else {
      alert("Please fill both the input box");
    }
  };
  // console.log(fetchAPI.data, "API");
  useEffect(() => {
    weatherApi();
  }, [userInput]);
  console.log(apiData, "DATA--");
  return (
    <div>
        <WeatherForm setuserInput={setuserInput} />
      {displayWeather === true ? <DisplayWeather apiData={apiData} /> : null}
    </div>
  )
}

export default MainWeatherApp