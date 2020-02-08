import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Button from "components/Button";
import { createSearchAndRedirect } from "actions/videoListActions";

const mapDispatchToProps = dispatch => ({
  createSearchAndRedirect: () => dispatch(createSearchAndRedirect())
});

const SearchButton = ({ createSearchAndRedirect }) => {
  return <Button btnTitle={"Search"} executeAction={createSearchAndRedirect} />;
};

SearchButton.propTypes = {
  createSearchAndRedirect: PropTypes.func
};

export default connect(null, mapDispatchToProps)(SearchButton);
