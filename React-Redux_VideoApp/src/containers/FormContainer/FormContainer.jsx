import React, { Component } from "react";
import PropTypes from "prop-types";

import SearchInputText from "components/SearchInputText";
import SearchButton from "components/SearchButton";
import Toggler from "components/Toggler";

class FormContainer extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // };

  onToggleClick = () => {
    // this.props.setSearchByValue();
  };

  onSearchInputTextChange = () => {
    // this.props.setSearchTextValue();
  };

  onSearchButtonClick = () => {
    // this.props.fetchVideos();
  };

  render() {
    return (
      <div>
        <SearchInputText
          onSearchInputTextChange={this.onSearchInputTextChange}
        />
        <SearchButton onSearchButtonClick={this.onSearchButtonClick}>
          Search
        </SearchButton>
        <Toggler
          onToggleClick={this.onToggleClick}
          togglerTitle={"SEARCH BY"}
          togglerOptionA={"TITLE"}
          togglerOptionB={"GENRE"}
        />
      </div>
    );
  }
}

export default FormContainer;
