import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Button from "components/Button";
import { createSearch } from "actions/videoListActions";

const mapDispatchToProps = dispatch => ({
  createSearch: () => dispatch(createSearch())
});

class SearchButtonContainer extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // };

  render() {
    const { createSearch } = this.props;

    return <Button btnTitle={"Search"} executeAction={createSearch} />;
  }
}

export default connect(null, mapDispatchToProps)(SearchButtonContainer);
