
//Api call for forecast using city
const getForecastCity = async function (city) {
  let fetched = await fetch(
    `${process.env.REACT_APP_API_URL}/forecast/?q=${city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
  );
  let data = await fetched.json();
  return data;
};
//Api call for forecast using Zip code
const getForecastZip = async function (zip) {
  let fetched = await fetch(
    `${process.env.REACT_APP_API_URL}/forecast/?zip=${zip}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
  );
  let data = await fetched.json();
  return data;
};
//Api call for forecast using Geolocation
const getForecastGeo = async function (latitude, longitude) {
  let fetched = await fetch(
    `${process.env.REACT_APP_API_URL}/forecast/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
  );
  let data = await fetched.json();
  return data;
};
//Api call for current weather using city
const getCurrentWeather = async function (city) {
  let fetched = await fetch(
    `${process.env.REACT_APP_API_URL}/weather/?q=${city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
  );
  let data = await fetched.json();
  return data;
};
export { getForecastCity, getForecastZip, getForecastGeo, getCurrentWeather };
