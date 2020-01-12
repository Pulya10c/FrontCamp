import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import SearchIcon from "components/SearchIcon";
import { resetSearchAngRedirect } from "actions/currentVideoActions";

const mapDispatchToProps = dispatch => ({
  resetSearchAngRedirect: () => dispatch(resetSearchAngRedirect())
});

const SearchIconContainer = ({ resetSearchAngRedirect }) => {
  return <SearchIcon executeAction={resetSearchAngRedirect} />;
};

SearchIconContainer.propTypes = {
  resetSearchAngRedirect: PropTypes.func
};

export default connect(null, mapDispatchToProps)(SearchIconContainer);
