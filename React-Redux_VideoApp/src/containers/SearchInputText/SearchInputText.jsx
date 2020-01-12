import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import InputText from "components/InputText";
import { searchSelector } from "selectors/videoListSelectors";
import {
  updateFilterConfigBy,
  createSearchAndRedirect
} from "actions/videoListActions";
import { API } from "src/constants";

const mapStateToProps = state => ({
  searchValue: searchSelector(state)
});

const mapDispatchToProps = dispatch => ({
  setSearchValue: value => dispatch(updateFilterConfigBy[API.SEARCH](value)),
  createSearchAndRedirect: () => dispatch(createSearchAndRedirect())
});

const InputTextContainer = ({
  searchValue,
  setSearchValue,
  createSearchAndRedirect
}) => {
  return (
    <InputText
      inputValue={searchValue}
      executeActionByEnter={createSearchAndRedirect}
      setInputValue={setSearchValue}
    />
  );
};

InputTextContainer.propTypes = {
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func,
  createSearchAndRedirect: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(InputTextContainer);
