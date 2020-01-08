import React, { Component } from "react";
import { Button } from "./styles";

class ButtonComponent extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // };

  render() {
    const { btnTitle } = this.props;
    return <Button onClick={this.handleClick}>{btnTitle}</Button>;
  }

  handleClick = () => {
    const { executeAction } = this.props;
    executeAction();
  };
}

export default ButtonComponent;
