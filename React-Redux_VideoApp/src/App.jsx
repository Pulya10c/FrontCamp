import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { Redirect, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import { history } from "src/configureStore";
import Spinner from "components/Spinner";
import MainWrapper from "components/MainWrapper";
import { PATHS } from "src/constants";

const VideoList = React.lazy(() => import("pages/VideoList"));
const CurrentVideo = React.lazy(() => import("pages/CurrentVideo"));
const NoMatch = React.lazy(() => import("pages/NoMatch"));

const App = () => (
  <ConnectedRouter history={history}>
    <MainWrapper>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path={PATHS.HOME}>
            <Redirect to={PATHS.VIDEO_LIST_PAGE} />
          </Route>
          <Route path={PATHS.VIDEO_LIST_PAGE}>
            <VideoList />
          </Route>
          <Route path={PATHS.CURRENT_VIDEO_PAGE}>
            <CurrentVideo />
          </Route>
          <Route path={PATHS.ANY}>
            <NoMatch />
          </Route>
        </Switch>
      </Suspense>
    </MainWrapper>
  </ConnectedRouter>
);

export default App;
