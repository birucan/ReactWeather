import React from "react";
import Input from "@material-ui/core/Input";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

//local components
import { Licenses } from "./Licenses";
import { Forecast } from "./Forecast";

//Controls which view is currently shown and contains the weather forecast and map component, it also contains the licenses view
function Content(props) {
  //state hook for geolocacion
  const [latitudeState, setLatitudeState] = React.useState();
  const [longitudState, setLongitudState] = React.useState();
  const [positionState, setPositionState] = React.useState();

  //state hook that manages if the query was submutted since we have limited API calls
  const [submitedState, setSumbitedState] = React.useState(false);

  //This state hook manages what type of search the user is going to use
  const [searchState, setSearchState] = React.useState("city name");

  //This state hook manages The user input for the search
  const [searchInputState, setSearchInputState] = React.useState("");

  //gets your current geolocation
  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function (position) {
        setPositionState(position);
        setLatitudeState(position.coords.latitude);
        setLongitudState(position.coords.longitude);
      });
    }
  }, [navigator.geolocation]);

  //Changes the value for the search State
  const handleSearchChange = (event) => {
    setSumbitedState(false);
    setSearchState(event.target.value);
  };

  //Manages input for the searchbar
  const handleSearchInputChange = (event) => {
    setSumbitedState(false);
    setSearchInputState(event.target.value);
  };

  //Returns the searchbar or geolocation depending on the state
  function getSearchBar() {
    if (searchState === "city name" || searchState === "zip code") {
      return (
        <div>
          <Input
            placeholder="Search..."
            value={searchInputState}
            onChange={handleSearchInputChange}
            inputProps={{ "aria-label": "description" }}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          ></Input>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setSumbitedState(true);
            }}
          >
            Submit
          </Button>
        </div>
      );
    } else {
      if (!positionState) {
        return <h2>Unable to get you geolocation</h2>;
      } else {
        return (
          <h4>
            Current geolocation: Latitude:{latitudeState}, Longitud:
            {longitudState}
          </h4>
        );
      }
    }
  }

  //Manages props sent to Forecast component
  function getForecast() {
    if (searchState === "city name") {
      return (
        <Forecast
          city={searchInputState}
          submitedState={submitedState}
          searchState={searchState}
        />
      );
    }
    if (searchState === "zip code") {
      return (
        <Forecast
          zip={searchInputState}
          submitedState={submitedState}
          searchState={searchState}
        />
      );
    }
    if (searchState === "current location") {
      if (latitudeState && longitudState) {
        console.log("llegue");
        return (
          <Forecast
            lat={latitudeState}
            lon={longitudState}
            searchState={searchState}
          />
        );
      }
    }
  }

  //If page state is weather it returns the search bar and the weather components, if not it returns licenses
  if (props.pageState === "weather") {
    return (
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} />

          <Grid item xs={12}>
            <Typography variant="h5" component="h5">
              Search by inputing {searchState}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={4}>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Search Setting</FormLabel>
                    <RadioGroup
                      color="primary"
                      aria-label="location"
                      name="searchState"
                      value={searchState}
                      onChange={handleSearchChange}
                    >
                      <FormControlLabel
                        color="primary"
                        value="city name"
                        control={<Radio />}
                        label="City Name"
                      />
                      <FormControlLabel
                        color="primary"
                        value="zip code"
                        control={<Radio />}
                        label="Zip Code"
                      />
                      <FormControlLabel
                        color="primary"
                        value="current location"
                        control={<Radio />}
                        label="Geolocation"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>

                <Grid item xs={6}>
                  {getSearchBar()}
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            {getForecast() || " "}
          </Grid>
        </Grid>
      </Container>
    );
  }
  if (props.pageState === "licenses") {
    return <Licenses />;
  } else {
    return <h1>You shouldn't be here</h1>;
  }
}

export { Content };
