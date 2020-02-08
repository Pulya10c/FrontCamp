import React from "react";
import PropTypes from "prop-types";

import { SearchInputText } from "./styles";

const InputText = ({ inputValue, executeActionByEnter, setInputValue }) => {
  const handleSearchKeyUp = ({ key }) => {
    if (key === "Enter") {
      executeActionByEnter();
    }
  };

  const handleSearchChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <SearchInputText
      type="text"
      value={inputValue}
      onChange={handleSearchChange}
      onKeyUp={handleSearchKeyUp}
    />
  );
};

InputText.propTypes = {
  inputValue: PropTypes.string,
  executeActionByEnter: PropTypes.func,
  setInputValue: PropTypes.func
};

export default InputText;
