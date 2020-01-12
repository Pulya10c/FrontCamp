import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import SearchIcon from "components/SearchIcon";
import MainTitle from "components/MainTitle";
import SplitWrapper from "components/SplitWrapper";

import { isVideoListPath } from "selectors/routerSelectors";
import { resetSearchAngRedirect } from "actions/currentVideoActions";

const mapStateToProps = state => ({
  isVideoListPath: isVideoListPath(state)
});

const mapDispatchToProps = dispatch => ({
  resetSearchAngRedirect: () => dispatch(resetSearchAngRedirect())
});

const MainTitleAndSearchIcon = ({
  resetSearchAngRedirect,
  isVideoListPath
}) => {
  return (
    <SplitWrapper>
      <MainTitle>Video app</MainTitle>
      {!isVideoListPath && (
        <SearchIcon executeAction={resetSearchAngRedirect} />
      )}
    </SplitWrapper>
  );
};

MainTitleAndSearchIcon.propTypes = {
  resetSearchAngRedirect: PropTypes.func,
  isVideoListPath: PropTypes.bool
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainTitleAndSearchIcon);
