import React from "react";
import {
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
} from "@material-ui/core";

//assets
import MenuIcon from "@material-ui/icons/Menu";
import GitHubIcon from "@material-ui/icons/GitHub";
import DescriptionIcon from "@material-ui/icons/Description";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

//Contains AppBar, which sits on top of the webapp. contains drawer menu as well
function AppBarUI(props) {
  function pageHandler(value) {
    props.setPageState(value);
  }

  //State hook for managing the opening and closing state for the drawer
  const [drawerState, setDrawerState] = React.useState(false);

  //Toggles the drawer for it to open or close
  const toggleDrawer = (open) => (event) => {
    setDrawerState(open);
  };

  //Used to update the app state by changing the father components props
  React.useEffect(() => {
    props.setPageState(props.pageState);
  }, [props]);

  //Content inside the Drawer
  const buttonList = () => (
    <List>
      <ListItem
        button
        onClick={() => {
          pageHandler("weather");
        }}
      >
        <ListItemText>Weather</ListItemText>
        <ListItemIcon>
          <WbSunnyIcon />
        </ListItemIcon>
      </ListItem>

      <ListItem
        button
        onClick={() => {
          pageHandler("licenses");
        }}
      >
        <ListItemText>Licenses</ListItemText>
        <ListItemIcon>
          <DescriptionIcon />
        </ListItemIcon>
      </ListItem>

      <a
        href="https://github.com/birucan/ReactWeather"
        style={{ textDecoration: "none", color: "black" }}
      >
        <ListItem button>
          <ListItemText>Git repo</ListItemText>
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
        </ListItem>
      </a>
    </List>
  );

  return (
    <div
      className="AppBarContainer"
      pageState={props.pageState}
      setPageState={pageHandler}
    >
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6">React Weather App</Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor={"left"} open={drawerState} onClose={toggleDrawer(false)}>
        {buttonList()}
      </Drawer>
    </div>
  );
}

export { AppBarUI };
