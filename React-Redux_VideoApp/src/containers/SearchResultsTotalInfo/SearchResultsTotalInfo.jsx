import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import InfoSubTitle from "components/InfoSubTitle";

import { videoListTotalSelector } from "selectors/videoListSelectors";

const mapStateToProps = state => ({
  total: videoListTotalSelector(state)
});

const SearchResultsTotalInfo = ({ total }) => {
  return (
    <InfoSubTitle>
      {total} {total === 1 ? "movie was" : "movies were"} found
    </InfoSubTitle>
  );
};

SearchResultsTotalInfo.propTypes = {
  total: PropTypes.number
};

export default connect(mapStateToProps, null)(SearchResultsTotalInfo);
