import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import withErrorAndFetchingRoutePage from "hocs/withErrorAndFetchingRoutePage";
import Header from "components/Header";
import SubSection from "components/SubSection";
import SearchIcon from "containers/SearchIcon";
import SearchResultsGenresInfo from "containers/SearchResultsGenresInfo";
import CurrentVideoCard from "containers/CurrentVideoCard";

import VideoListGrid from "containers/VideoListGrid";
import { fetchCurrentVideoAndSimilarFilms } from "actions/currentVideoActions";

const mapDispatchToProps = dispatch => ({
  fetchCurrentVideoAndSimilarFilms: id =>
    dispatch(fetchCurrentVideoAndSimilarFilms(id))
});

const CurrentVideo = ({ fetchCurrentVideoAndSimilarFilms }) => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchCurrentVideoAndSimilarFilms(id);
  }, [id]);

  return (
    <>
      <Header>
        <SearchIcon />
        <CurrentVideoCard />
      </Header>
      <SubSection>
        <SearchResultsGenresInfo />
      </SubSection>
      <VideoListGrid />
    </>
  );
};

CurrentVideo.propTypes = {
  fetchCurrentVideoAndSimilarFilms: PropTypes.func.isRequired
};

export default withErrorAndFetchingRoutePage(
  connect(null, mapDispatchToProps)(CurrentVideo)
);
