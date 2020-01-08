import React from "react";
import {
  ErrorWrapper,
  ErrorTitle,
  ErrorSubTitle,
  ErrorContent
} from "./styles";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error);
    console.log(info);
  }

  handleClickReloadPage = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorWrapper>
          <ErrorTitle>Sorry!</ErrorTitle>
          <ErrorSubTitle>Something went wrong.</ErrorSubTitle>
          <ErrorContent>
            Try to <a onClick={this.handleClickReloadPage}>REFRESH</a> the page
          </ErrorContent>
        </ErrorWrapper>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
