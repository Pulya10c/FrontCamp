import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { SORT_BY_VALUES } from "src/constants";
import Toggler from "components/Toggler";
import { sortBySelector } from "selectors/videoListSelectors";
import { sortByValueAndFetchMovies } from "actions/videoListActions";

const mapStateToProps = state => ({
  sortValue: sortBySelector(state)
});

const mapDispatchToProps = dispatch => ({
  sortByValue: value => dispatch(sortByValueAndFetchMovies(value))
});

const SortByToggler = ({ sortValue, sortByValue }) => {
  return (
    <Toggler
      togglerTitle="SORT BY"
      selectedValue={sortValue}
      togglerOptions={SORT_BY_VALUES}
      setToggleValue={sortByValue}
    />
  );
};

SortByToggler.propTypes = {
  sortValue: PropTypes.string,
  sortByValue: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortByToggler);
