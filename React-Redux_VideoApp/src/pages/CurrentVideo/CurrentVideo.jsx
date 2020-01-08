import React, { Component } from "react";
import PropTypes from "prop-types";

import Header from "components/Header";
import SearchButtonContainer from "containers/SearchButtonContainer";
import SearchInputTextContainer from "containers/SearchInputTextContainer";
import SearchByTogglerContainer from "containers/SearchByTogglerContainer";

class CurrentVideo extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // };

  render() {
    return (
      <Header>
        <SearchInputTextContainer />
        <SearchByTogglerContainer />
        <SearchButtonContainer />
      </Header>
    );
  }
}

export default CurrentVideo;
