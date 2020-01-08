import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Spinner from "components/Spinner";
import { fetchingSelector, errorSelector } from "selectors/uiStateSelectors";

const withErrorFetchingPage = PageComponent => {
  const mapStateToProps = state => ({
    fetching: fetchingSelector(state),
    error: errorSelector(state)
  });

  class InitialPage extends Component {
    static propTypes = {
      error: PropTypes.object,
      fetching: PropTypes.bool.isRequired
    };

    render() {
      const { error, fetching } = this.props;

      return (
        <React.Fragment>
          {fetching && <Spinner />}
          {error && <span>Нешта здохла... =\</span>}
          <PageComponent />;
        </React.Fragment>
      );
    }
  }

  return connect(mapStateToProps)(InitialPage);
};

export default withErrorFetchingPage;
