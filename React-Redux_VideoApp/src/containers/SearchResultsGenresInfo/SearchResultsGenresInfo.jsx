import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import SubSection from "components/SubSection";
import InfoSubTitle from "components/InfoSubTitle";

import { currentVideoGenresSelector } from "selectors/currentVideoSelectors";

const mapStateToProps = state => ({
  genres: currentVideoGenresSelector(state)
});

const SearchResultsGenresInfo = ({ genres }) => {
  return (
    <InfoSubTitle>
      Films by the same {genres.join(", ")}{" "}
      {genres.length === 1 ? "genre" : "genres"}
    </InfoSubTitle>
  );
};

SearchResultsGenresInfo.propTypes = {
  genres: PropTypes.array
};

export default connect(mapStateToProps, null)(SearchResultsGenresInfo);
