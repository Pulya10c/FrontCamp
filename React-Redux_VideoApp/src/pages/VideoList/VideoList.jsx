import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Header from "components/Header";

import withErrorFetchingPage from "hocs/withErrorFetchingPage";
import MainTitle from "components/MainTitle";
import Toggler from "components/Toggler";

import SearchButtonContainer from "containers/SearchButtonContainer";

import SearchInputTextContainer from "containers/SearchInputTextContainer";
import SearchByTogglerContainer from "containers/SearchByTogglerContainer";

import { fetchMovies } from "actions/videoListActions";

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch(fetchMovies())
});

class VideoList extends Component {
  componentDidMount() {
    const { fetchMovies } = this.props;
    fetchMovies();
  }

  render() {
    console.log("this.props Re", this.props);

    return (
      <Header>
        <MainTitle>Videos</MainTitle>
        <SearchInputTextContainer />
        <SearchByTogglerContainer />
        <SearchButtonContainer />
      </Header>
    );
  }
}
export default withErrorFetchingPage(
  connect(null, mapDispatchToProps)(VideoList)
);
