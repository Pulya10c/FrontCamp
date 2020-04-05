import React from 'react';

const Route = () => <div className="mock-react-router-route"></div>;

Route.propTypes = {};

const Router = () => <div className="mock-react-router-router"></div>;

const Consumer = () => <div className="mock-react-router-consumer"></div>;

const Switch = () => <div className="mock-react-router-switch"></div>;

const Redirect = () => <div className="mock-react-router-redirect"></div>;

export default {
  Route,
  Router,
  Switch,
  Redirect,
  __RouterContext: {
    Consumer
  },
  withRouter: ConnectedComponent => ({
    ConnectedComponent
  })
};
