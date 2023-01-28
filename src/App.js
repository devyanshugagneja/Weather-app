import React, { useEffect, useState } from "react";
import "./App.css";
import PropTypes from "prop-types";

function App({ city }) {
const [weather, setWeather] = useState({});
const [cityInput, setCityInput] = useState(city);
const updateWeather = async () => {
if (!cityInput) return;
let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=cbafa7e44dbd7ac9f269f8a4455a2954`;
let data = await fetch(url);
let parsedData = await data.json();
setWeather(parsedData);
};
useEffect(() => {
updateWeather();
}, [cityInput]);
return (
<div className="col-md-12">
<div className="weatherBg">
<h1 className="text-heading">Weather-App</h1>
<div className="d-grid gap-3 col-4">
<input type="text" className="form-control my-4" onChange={(e) => setCityInput(e.target.value)} value={cityInput} />
<button className="btn btn-primary" type="button" onClick={updateWeather}>
Search
</button>
</div>
</div>
<div className="col-md-12 text-center mt-5">
{weather.main && (
<div className="shadow rounded wetherResultBox">
<img
           src="https://www.noaa.gov/sites/default/files/styles/square_width_650/public/2021-02/FocusArea__Weather-02.jpg?h=5dc006f5&itok=20VGa8_F"
           alt=""
           className="weatherIcon"
         />
<h5 className="weatherCity">{cityInput}</h5>
<h6 className="weatherTemp">{(weather.main.temp - 273.15).toFixed(2)} ° C</h6>
</div>
)}
</div>
</div>
);
}

App.defaultProps = {
city: "delhi",
};

App.propTypes = {
city: PropTypes.string,
};

export default App;