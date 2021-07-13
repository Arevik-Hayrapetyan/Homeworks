import Weather from "./weatherComp-net/Weather";
import weatherData from "./weatherData/weatherData";

function App() {
  return (
    <div className="App">
      <Weather data={weatherData} />
    </div>
  );
}

export default App;
