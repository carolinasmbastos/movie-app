import React from "react";
import { ItemList } from "../layout/ItemList";

class SearchResultsContainer extends React.Component {
  render() {
    //console.log("SearchResultsContainer", this.props);
    return (
      <div>
        <h2>
          {this.props.searchResults.length == 0 ? this.props.message : ""}
        </h2>

        <ItemList items={this.props.searchResults} />
      </div>
    );
  }
}

export default SearchResultsContainer;
 