//This challenge assumes the week starts on Sunday.*
function getDay(date) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[date.getDay()];
}

let date = new Date("12/07/2016");
console.log(getDay(date));
