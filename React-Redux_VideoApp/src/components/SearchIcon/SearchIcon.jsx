import React from "react";
import PropTypes from "prop-types";

import Icon from "./search_icon.png";
import { Img } from "./styles";

const SearchIcon = ({ executeAction }) => {
  const handleClick = () => {
    executeAction();
  };

  return <Img src={Icon} alt={"Search"} onClick={handleClick} />;
};

SearchIcon.propTypes = {
  executeAction: PropTypes.func
};

export default SearchIcon;
