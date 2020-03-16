import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import GenericContainer from "../containers/GenericContainer";
import SearchResultsContainer from "../containers/SearchResultsContainer";
import {
  getMovieCategories,
  getTVShowsCategories
} from "../../config/MoviesTVShowConfig";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #AAAAAA"
  },
  tabs: {
    backgroundColor: "#CCCCCC"
  }
}));

export default function SimpleTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(props.value);
  const [message, setMessage] = React.useState(props.message);
  const [searchResults, setSearchResults] = React.useState(props.searchResults);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setMessage("Please enter a search");
    setSearchResults([]);
    console.log("value", newValue);
  };
  React.useEffect(() => {
    setValue(props.value);
    setMessage(props.message);
    setSearchResults(props.searchResults);
  }, [props]);
  console.log("SimpleTabs", props);
  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        variant="fullWidth"
        className={classes.tabs}
      >
        <Tab label="Movies" {...a11yProps(0)} />
        <Tab label="Search Results" {...a11yProps(1)} />
        <Tab label="TV Shows" {...a11yProps(2)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <GenericContainer categories={getMovieCategories} mediaType="movie" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SearchResultsContainer
          message={message}
          searchResults={searchResults}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <GenericContainer categories={getTVShowsCategories} mediaType="tv" />
      </TabPanel>
    </div>
  );
}
