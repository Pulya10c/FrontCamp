import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import withErrorAndFetchingRoutePage from "hocs/withErrorAndFetchingRoutePage";
import Header from "components/Header";
import MainTitle from "components/MainTitle";

import SubSection from "components/SubSection";
import SearchButton from "containers/SearchButton";
import SearchInputText from "containers/SearchInputText";
import SearchByToggler from "containers/SearchByToggler";
import SearchResultsTotalInfo from "containers/SearchResultsTotalInfo";
import SortByToggler from "containers/SortByToggler";

import VideoListGrid from "containers/VideoListGrid";
import { fetchMovies } from "actions/videoListActions";

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch(fetchMovies())
});

const VideoList = ({ fetchMovies }) => {
  useEffect(() => {
    fetchMovies();
  });

  return (
    <>
      <Header>
        <MainTitle>FIND YOUR MOVIE</MainTitle>
        <SearchInputText />
        <SearchByToggler />
        <SearchButton />
      </Header>
      <SubSection>
        <SearchResultsTotalInfo />
        <SortByToggler />
      </SubSection>
      <VideoListGrid />
    </>
  );
};

VideoList.propTypes = {
  fetchMovies: PropTypes.func
};

export default withErrorAndFetchingRoutePage(
  connect(null, mapDispatchToProps)(VideoList)
);
