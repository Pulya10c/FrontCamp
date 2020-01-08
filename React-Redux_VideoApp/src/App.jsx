import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { Redirect, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import { history } from "src/configureStore";
import Spinner from "components/Spinner";
import MainWrapper from "components/MainWrapper";
import { PATHS } from "src/constants";

// import HomePage from "pages/HomePage";
// import VideoList from "pages/VideoList";
// import CurrentVideo from "pages/CurrentVideo";

const HomePage = React.lazy(() => import("pages/HomePage"));
const VideoList = React.lazy(() => import("pages/VideoList"));
const CurrentVideo = React.lazy(() => import("pages/CurrentVideo"));

class App extends React.Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <MainWrapper>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path={PATHS.VIDEO_LIST_PAGE} component={VideoList} />
              <Route
                exact
                path={PATHS.CURRENT_VIDEO_PAGE}
                component={CurrentVideo}
              />
              <Redirect from="/" to={PATHS.VIDEO_LIST_PAGE} />
            </Switch>
          </Suspense>
        </MainWrapper>
      </ConnectedRouter>
    );
  }
}

export default App;
