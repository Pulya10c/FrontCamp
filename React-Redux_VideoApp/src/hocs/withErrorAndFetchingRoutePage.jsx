import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import Spinner from "components/Spinner";
import { fetchingSelector, errorSelector } from "selectors/uiStateSelectors";

const withErrorAndFetchingRoutePage = PageComponent => {
  const mapStateToProps = state => ({
    fetching: fetchingSelector(state),
    error: errorSelector(state)
  });

  const InitialPage = ({ error, fetching, dispatch, ...routeProps }) => {
    return (
      <>
        {fetching && <Spinner />}
        {error && <span>Нешта здохла... =\</span>}
        <PageComponent {...routeProps} />
      </>
    );
  };

  return withRouter(connect(mapStateToProps, null)(InitialPage));
};

export default withErrorAndFetchingRoutePage;
