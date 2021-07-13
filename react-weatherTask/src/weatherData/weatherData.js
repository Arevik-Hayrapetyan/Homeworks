import mostlySunny from "../weatherImg/01.svg";
import sunny from "../weatherImg/05.svg";
import gloomy from "../weatherImg/09.svg";
import sunnyRainy from "../weatherImg/17.svg";

const weatherForecasts = [
  {
    weekDey: "Monday",
    imgURL: mostlySunny,
    temp: "36C",
  },
  {
    weekDey: "Tuesday",
    imgURL: sunny,
    temp: "32C",
  },
  {
    weekDey: "Wednesday",
    imgURL: gloomy,
    temp: "35C",
  },
  {
    weekDey: "Thursday",
    imgURL: gloomy,
    temp: "45C",
  },
  {
    weekDey: "Friday",
    imgURL: sunnyRainy,
    temp: "36C",
  },
  {
    weekDey: "Saturday",
    imgURL: sunnyRainy,
    temp: "37C",
  },
  {
    weekDey: "Sunday",
    imgURL: sunnyRainy,
    temp: "39C",
  },
];

export default weatherForecasts;
