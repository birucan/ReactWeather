import * as React from "react";
import {
  getForecastCity,
  getForecastZip,
  getForecastGeo,
  getCurrentWeather,
} from ".././ApiManager";
import {
  Card,
  FormControl,
  InputLabel,
  Typography,
  MenuItem,
  Grid,
  Paper,
  Select,
} from "@material-ui/core/";

import cloudIcon from ".././img/svg/0cloudy.svg";
import sunIcon from ".././img/svg/0clear.svg";
import lightRainIcon from ".././img/svg/0drizzle.svg";
import heavyRainicon from ".././img/svg/0rainy.svg";
import lightningIcon from ".././img/svg/0storm.svg";
import smokeIcon from ".././img/svg/0smoke.svg";
import snowIcon from ".././img/svg/006-snowy.svg";
import { MapComponent } from "./Map";

//Container for 5 day forecast and hour selector
function Forecast({ submitedState, city, zip, lat, lon, searchState }) {
  //contains icons corresponding to data from api
  const weathericons = {
    Clouds: cloudIcon,
    Clear: sunIcon,
    Drizzle: lightRainIcon,
    Rain: heavyRainicon,
    Thunderstorm: lightningIcon,
    Smoke: smokeIcon,
    Snow: snowIcon,
  };
  //Days for easy access to forecast data
  const days = {
    day0: 0,
    day1: 7,
    day2: 15,
    day3: 23,
    day4: 31,
  };

  //Contains saved data from query
  const [dataState, setDataState] = React.useState();
  //Contains what is being displayed in the component
  const [parsed, setParsed] = React.useState();
  //Manages the state for the component
  const [loading, setLoading] = React.useState(true);
  //Manages hours to select for forecast
  const [hourState, setHourState] = React.useState(0);
  //Manages if the forecast should be shown in fahrenheit or celsius
  const [farenState, setFarenState] = React.useState(false);
  //Contains map component
  const [mapState, setMapState] = React.useState("");

  //Sets factors For conversion to farenheight
  var farenFactor;
  var farenSum;
  var simbol;

  //first calculation for Frenheight factors
  if (farenState) {
    farenFactor = 9 / 5;
    farenSum = 32;
    simbol = "°F";
  } else {
    farenFactor = 1;
    farenSum = 0;
    simbol = "°C";
  }
  //Handles hour change on list
  const handleHourChange = (event) => {
    setHourState(event.target.value);
  };
  //Handles format change on list and set the proper factors
  const handleFarenChange = (event) => {
    setFarenState(event.target.value);
    if (farenState) {
      farenFactor = 9 / 5;
      farenSum = 32;
      simbol = "°F";
    } else {
      farenFactor = 1;
      farenSum = 0;
      simbol = "°C";
    }
  };
  //sets map component to the set coordinates, the actual change is managed by the component
  function setMapProps(lat, lon) {
    setMapState(<MapComponent center={[lat, lon]} zoom={4} />);
  }

  //Takes data from query and converts it to cards with weather and forcast or an error display
  const dataParser = function (fetchedData) {
    if (
      fetchedData.cod === "401" ||
      fetchedData.cod === "404" ||
      fetchedData.cod === "429" ||
      fetchedData.cod === "400"
    ) {
      setParsed("Error " + fetchedData.cod + ": " + fetchedData.message);
    } else {
      setDataState(fetchedData);

      getCurrentWeather(fetchedData.city.name).then((result) => {
        const currentWeather = result;

        setParsed(
          <Grid
            container
            spacing={3}
            direction="row"
            alignItems="center"
            justify="center"
            style={{ minWidth: "100vh" }}
          >
            <Grid item xs={12}>
              <Typography
                gutterBottom
                variant="h4"
                component="h2"
                align="center"
              >
                Current Weather for {fetchedData.city.name},{" "}
                {fetchedData.city.country}
              </Typography>
              <Grid item xs={12}>
                <Card>
                  <Card>
                    <img
                      src={weathericons[currentWeather.weather[0].main]}
                      alt="weather icon"
                      style={{ width: "10em", height: "10em" }}
                    />

                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="h5"
                      align="center"
                    >
                      Description: {currentWeather.weather[0].description}
                    </Typography>
                  </Card>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="h5"
                    align="center"
                  >
                    Temperature:{" "}
                    {(
                      currentWeather.main.temp * farenFactor +
                      farenSum
                    ).toFixed(1)}
                    {simbol}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="h5"
                    align="center"
                  >
                    Feels Like:{" "}
                    {(
                      currentWeather.main.feels_like * farenFactor +
                      farenSum
                    ).toFixed(1)}
                    {simbol}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="h5"
                    align="center"
                  >
                    Humidity: {currentWeather.main.humidity}%
                  </Typography>
                </Card>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Typography
                gutterBottom
                variant="h4"
                component="h2"
                align="center"
              >
                Forecast for {fetchedData.city.name}, {fetchedData.city.country}
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <FormControl variant="filled">
                <InputLabel>Hour</InputLabel>
                <Select
                  labelId="hour"
                  id="demo-simple-select-filled"
                  value={hourState}
                  onChange={handleHourChange}
                >
                  <MenuItem value={0}>3:00 AM</MenuItem>
                  <MenuItem value={1}>6:00 AM</MenuItem>
                  <MenuItem value={2}>9:00 AM</MenuItem>
                  <MenuItem value={3}>12:00 PM</MenuItem>
                  <MenuItem value={4}>3:00 PM</MenuItem>
                  <MenuItem value={5}>6:00 PM</MenuItem>
                  <MenuItem value={6}>9:00 PM</MenuItem>
                  <MenuItem value={7}>12:00 AM</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl variant="filled">
                <InputLabel>Format</InputLabel>
                <Select
                  labelId="format"
                  id="demo-simple-select-filled2"
                  value={farenState}
                  onChange={handleFarenChange}
                >
                  <MenuItem value={true}>Fahrenheit</MenuItem>
                  <MenuItem value={false}>Celsius</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item>
              <Card>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  align="center"
                >
                  Today
                </Typography>
                <Card>
                  <img
                    src={
                      weathericons[
                        fetchedData.list[days["day0"] + hourState].weather[0]
                          .main
                      ]
                    }
                    alt="weather icon"
                    style={{ width: "10em", height: "10em" }}
                  />

                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="h5"
                    align="center"
                  >
                    Description:{" "}
                    {
                      fetchedData.list[days["day0"] + hourState].weather[0]
                        .description
                    }
                  </Typography>
                </Card>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="h5"
                  align="center"
                >
                  Temperature:{" "}
                  {(
                    fetchedData.list[days["day0"] + hourState].main.temp *
                      farenFactor +
                    farenSum
                  ).toFixed(1)}
                  {simbol}
                </Typography>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="h5"
                  align="center"
                >
                  Feels Like:{" "}
                  {(
                    fetchedData.list[days["day0"] + hourState].main.feels_like *
                      farenFactor +
                    farenSum
                  ).toFixed(1)}
                  {simbol}
                </Typography>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="h5"
                  align="center"
                >
                  Humidity:{" "}
                  {fetchedData.list[days["day0"] + hourState].main.humidity}%
                </Typography>
              </Card>
            </Grid>

            <Grid item >
              <Card>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  align="center"
                >
                  Tomorrow
                </Typography>
                <Card>
                  <img
                    src={
                      weathericons[
                        fetchedData.list[days["day1"] + hourState].weather[0]
                          .main
                      ]
                    }
                    alt="weather icon"
                    style={{ width: "10em", height: "10em" }}
                  />

                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="h5"
                    align="center"
                  >
                    Description:{" "}
                    {
                      fetchedData.list[days["day1"] + hourState].weather[0]
                        .description
                    }
                  </Typography>
                </Card>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="h5"
                  align="center"
                >
                  Temperature:{" "}
                  {(
                    fetchedData.list[days["day1"] + hourState].main.temp *
                      farenFactor +
                    farenSum
                  ).toFixed(1)}
                  {simbol}
                </Typography>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="h5"
                  align="center"
                >
                  Feels Like:{" "}
                  {(
                    fetchedData.list[days["day1"] + hourState].main.feels_like *
                      farenFactor +
                    farenSum
                  ).toFixed(1)}
                  {simbol}
                </Typography>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="h5"
                  align="center"
                >
                  Humidity:{" "}
                  {fetchedData.list[days["day1"] + hourState].main.humidity}%
                </Typography>
              </Card>
            </Grid>

            <Grid item >
              <Card>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  align="center"
                >
                  Day 3
                </Typography>
                <Card>
                  <img
                    src={
                      weathericons[
                        fetchedData.list[days["day2"] + hourState].weather[0]
                          .main
                      ]
                    }
                    alt="weather icon"
                    style={{ width: "10em", height: "10em" }}
                  />

                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="h5"
                    align="center"
                  >
                    Description:{" "}
                    {
                      fetchedData.list[days["day2"] + hourState].weather[0]
                        .description
                    }
                  </Typography>
                </Card>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="h5"
                  align="center"
                >
                  Temperature:{" "}
                  {(
                    fetchedData.list[days["day2"] + hourState].main.temp *
                      farenFactor +
                    farenSum
                  ).toFixed(1)}
                  {simbol}
                </Typography>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="h5"
                  align="center"
                >
                  Feels Like:{" "}
                  {(
                    fetchedData.list[days["day2"] + hourState].main.feels_like *
                      farenFactor +
                    farenSum
                  ).toFixed(1)}
                  {simbol}
                </Typography>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="h5"
                  align="center"
                >
                  Humidity:{" "}
                  {fetchedData.list[days["day2"] + hourState].main.humidity}%
                </Typography>
              </Card>
            </Grid>

            <Grid item >
              <Card>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  align="center"
                >
                  Day 4
                </Typography>
                <Card>
                  <img
                    src={
                      weathericons[
                        fetchedData.list[days["day3"] + hourState].weather[0]
                          .main
                      ]
                    }
                    alt="weather icon"
                    style={{ width: "10em", height: "10em" }}
                  />

                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="h5"
                    align="center"
                  >
                    Description:{" "}
                    {
                      fetchedData.list[days["day3"] + hourState].weather[0]
                        .description
                    }
                  </Typography>
                </Card>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="h5"
                  align="center"
                >
                  Temperature:{" "}
                  {(
                    fetchedData.list[days["day3"] + hourState].main.temp *
                      farenFactor +
                    farenSum
                  ).toFixed(1)}
                  {simbol}
                </Typography>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="h5"
                  align="center"
                >
                  Feels Like:{" "}
                  {(
                    fetchedData.list[days["day3"] + hourState].main.feels_like *
                      farenFactor +
                    farenSum
                  ).toFixed(1)}
                  {simbol}
                </Typography>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="h5"
                  align="center"
                >
                  Humidity:{" "}
                  {fetchedData.list[days["day3"] + hourState].main.humidity}%
                </Typography>
              </Card>
            </Grid>

            <Grid item >
              <Card>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  align="center"
                >
                  Day 5
                </Typography>
                <Card>
                  <img
                    src={
                      weathericons[
                        fetchedData.list[days["day4"] + hourState].weather[0]
                          .main
                      ]
                    }
                    alt="weather icon"
                    style={{ width: "10em", height: "10em" }}
                  />

                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="h5"
                    align="center"
                  >
                    Description:{" "}
                    {
                      fetchedData.list[days["day4"] + hourState].weather[0]
                        .description
                    }
                  </Typography>
                </Card>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="h5"
                  align="center"
                >
                  Temperature:{" "}
                  {(
                    fetchedData.list[days["day4"] + hourState].main.temp *
                      farenFactor +
                    farenSum
                  ).toFixed(1)}
                  {simbol}
                </Typography>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="h5"
                  align="center"
                >
                  Feels Like:{" "}
                  {(
                    fetchedData.list[days["day4"] + hourState].main.feels_like *
                      farenFactor +
                    farenSum
                  ).toFixed(1)}
                  {simbol}
                </Typography>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="h5"
                  align="center"
                >
                  Humidity:{" "}
                  {fetchedData.list[days["day4"] + hourState].main.humidity}%
                </Typography>
              </Card>
            </Grid>
          </Grid>
        );
      });
    }

    setLoading(false);
  };

  //city api data getter
  React.useEffect(() => {
    if (submitedState && searchState === "city name") {
      getForecastCity(city).then((result) => dataParser(result));
    }
  }, [city, submitedState, searchState]);

  //Zip code api data getter
  React.useEffect(() => {
    if (submitedState && searchState === "zip code") {
      getForecastZip(zip).then((result) => {
        dataParser(result);
      });
    }
  }, [zip, submitedState, searchState]);

  //geolocation api data getter
  React.useEffect(() => {
    if (searchState === "current location") {
      getForecastGeo(lat, lon).then((result) => {
        dataParser(result);
      });
    }
  }, [lat, lon, searchState]);

  //Updates forecast and weather whenever format is changed or hour is changed
  React.useEffect(() => {
    if (dataState) {
      dataParser(dataState);
    }
  }, [hourState, farenState]);

  //Responsable for updating map when data Changes
  React.useEffect(() => {
    if (dataState) {
      setMapProps(dataState.city.coord.lat, dataState.city.coord.lon);
    }
  }, [dataState]);

  if (loading) {
    return " ";
  } else {
    return (
      <div>
        <Grid spacing={3}>
          <Grid item xs={12} />
          <Grid item xs={12}>
            <Paper elevation={4}>{parsed}</Paper>
          </Grid>
          <Grid item xs={12} />
          <Grid item xs={12}>
            {mapState}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export { Forecast };
