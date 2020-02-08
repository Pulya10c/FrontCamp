import React from "react";
import PropTypes from "prop-types";

import { Button } from "./styles";

const ButtonComponent = ({ btnTitle, executeAction }) => {
  const handleClick = e => {
    executeAction();
  };

  const handleKeyUp = ({ key }) => {
    if (key === "Enter") {
      executeAction();
    }
  };

  return (
    <Button type="submit" onClick={handleClick} onKeyUp={handleKeyUp}>
      {btnTitle}
    </Button>
  );
};

Button.propTypes = {
  btnTitle: PropTypes.string,
  executeAction: PropTypes.func
};

export default ButtonComponent;
