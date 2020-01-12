import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { SEARCH_BY_VALUES } from "src/constants";
import Toggler from "components/Toggler";
import { searchBySelector } from "selectors/videoListSelectors";
import { updateFilterConfigBy } from "actions/videoListActions";
import { API } from "src/constants";

const mapStateToProps = state => ({
  searchByValue: searchBySelector(state)
});

const mapDispatchToProps = dispatch => ({
  setSearchByValue: value =>
    dispatch(updateFilterConfigBy[API.SEARCH_BY](value))
});

const SearchByToggler = ({ searchByValue, setSearchByValue }) => {
  return (
    <Toggler
      togglerTitle="SEARCH BY"
      selectedValue={searchByValue}
      togglerOptions={SEARCH_BY_VALUES}
      setToggleValue={setSearchByValue}
    />
  );
};

SearchByToggler.propTypes = {
  searchByValue: PropTypes.string,
  setSearchByValue: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchByToggler);
