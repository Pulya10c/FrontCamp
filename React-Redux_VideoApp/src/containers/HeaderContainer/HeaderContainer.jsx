import React, { Component } from "react";
import PropTypes from "prop-types";

import Header from "components/Header";
import MainTitle from "components/MainTitle";

class HeaderContainer extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // };

  render() {
    return (
      <Header>
        <MainTitle>Videos</MainTitle>
      </Header>
    );
  }
}

export default HeaderContainer;
