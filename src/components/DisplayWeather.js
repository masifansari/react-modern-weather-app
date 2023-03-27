import React from "react";
import styled from "styled-components";

export const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
};


const currentTime = new Date();
// let time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
let time = `${currentTime.toLocaleTimeString()}`;
// let apPM = currentTime.getHours() > 12 ? "PM" : "AM";
const DisplayWeather = (props) => {
  const { name, sys, weather, wind, main } = props.apiData;
  return (
    <>
      <WeatherContainer>
        <Info>
          <InfoLabel>
            {name}, {sys.country},Weather
          </InfoLabel>
          <DateLabel>As of {time}</DateLabel>
        </Info>
        <WeatherCondition>
          <WeatherDegree>{Math.floor(`${main.temp - 273.16}`)}°</WeatherDegree>
          <WeatherDesc>
            <WeatherLogo src={WeatherIcons[weather[0].icon]} />
            <span>{`${weather[0].description}`}</span>
          </WeatherDesc>
        </WeatherCondition>
        <span
          style={{ textAlign: "start", margin: "5px" }}
        >{`${weather[0].description}`}</span>
      </WeatherContainer>
      <WeatherInfoContainer>
        <WeatherInfoComp><span>Humidity</span> {main.humidity} %</WeatherInfoComp>
        <WeatherInfoComp><span>Wind</span> {wind.speed} km/hr</WeatherInfoComp>
        <WeatherInfoComp><span>Wind direction</span> {wind.deg}°deg </WeatherInfoComp>
        <WeatherInfoComp><span>pressure</span> {main.pressure} hpa</WeatherInfoComp>
        {/* <WeatherInfoComp><span>visibility</span> {visibility/1000} km</WeatherInfoComp> */}
        <WeatherInfoComp><span>Sunrise</span> {new Date(sys.sunrise).toLocaleTimeString()}</WeatherInfoComp>
        <WeatherInfoComp><span>Sunset</span> {new Date(sys.sunset).toLocaleTimeString()} </WeatherInfoComp>
      </WeatherInfoContainer>
    </>

  );
};

export default DisplayWeather;

const WeatherContainer = styled.div`
  display: flex;

  width: 30%;
  margin: auto;
  border: 2px solid black;
  border-radius: 5px;
  flex-direction: column;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  font-weight: bold;
`;
const DateLabel = styled.span`
  font-size: 14px;
  text-align: start;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
`;
const WeatherLogo = styled.img`
  width: 50px;
  height: 50px;

`;
const WeatherCondition = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const WeatherDegree = styled.span`
  font-size: 50px;
  font-weight: bold;
`;
const WeatherDesc = styled.div`
  display: flex;
  flex-direction: column;
`;
const WeatherInfoContainer = styled.div`
  display: flex;
  width: 30%;
  margin: auto;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

`;

const WeatherInfoComp=styled.div`
 padding:10px;
`;
