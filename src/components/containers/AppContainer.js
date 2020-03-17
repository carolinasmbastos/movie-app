import React from "react";
import SearchForm from "../Forms/SearchForm";
import { search } from "../../services/api";
import SimpleTabs from "../layout/SimpleTabs";
import {PAGE_SIZE} from "../../config/api-config"

class AppContainer extends React.Component {
  state = {
    searchResults: [],
    isLoading: false,
    selectedTab: 2
  };

  fetchResults = searchParams => {
    //console.log("searching", searchParams);
    this.setState({
      isLoading: true
    });

    search(searchParams).then(results => {
      //console.log("calling search returned", results);
      this.setState({
        searchResults: results.data.results.slice(0, PAGE_SIZE),
        message:
          results.data.results.length == 0
            ? `No data found using the search criteria ${searchParams.query}`
            : "",
        isLoading: false,
        selectedTab: 1
      });
    });
  };

  handleFocus = e => {
    this.setState({
      selectedTab: 1,
      searchResults: [],
      message: "Please Initiate a Search"
    });
  };

  render() {
    //console.log(this.state);
    return (
      <div>
        <h1 style={headerStyle}>React Movie App</h1>
        <SearchForm onFocus={this.handleFocus} onSubmit={this.fetchResults} />

        <SimpleTabs
          value={this.state.selectedTab}
          message={this.state.message}
          searchResults={this.state.searchResults}
        />
      </div>
    );
  }
}

const headerStyle = {
  border: "10px solid black",
  margin: 0,
  padding: "1% 0"
};

export default AppContainer;
 