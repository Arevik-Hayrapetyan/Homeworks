import "../weather.css";

export default function Weather(props) {
  return (
    <div className="wrapper">
      <h1>WEATHER</h1>
      <div className="weatherInfo">
        {props.data.map((el) => (
          <div>
            <h2>{el.weekDey}</h2>
            <img src={el.imgURL} />
            <p>{el.temp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
