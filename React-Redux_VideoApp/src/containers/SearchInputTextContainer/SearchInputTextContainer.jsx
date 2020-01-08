import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import InputText from "components/InputText";
import { searchSelector } from "selectors/videoListSelectors";
import { updateFilterConfigBy, createSearch } from "actions/videoListActions";
import { API } from "src/constants";

const mapStateToProps = state => ({
  searchValue: searchSelector(state)
});

const mapDispatchToProps = dispatch => ({
  setSearchValue: value => dispatch(updateFilterConfigBy[API.SEARCH](value)),
  createSearch: () => dispatch(createSearch())
});

class InputTextContainer extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // };

  render() {
    const { searchValue, setSearchValue, createSearch } = this.props;

    return (
      <InputText
        inputValue={searchValue}
        executeActionByEnter={createSearch}
        setInputValue={setSearchValue}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputTextContainer);
