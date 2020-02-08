import React from "react";
import PropTypes from "prop-types";

import {
  TogglerWrapper,
  TogglerRadioOption,
  TogglerLabelOption,
  TogglerTitle
} from "./styles";

const Toggler = ({
  togglerTitle,
  selectedValue,
  togglerOptions,
  setToggleValue
}) => {
  const handleOptionChange = ({ target: { value } }) => {
    setToggleValue(value);
  };

  return (
    <TogglerWrapper>
      <TogglerTitle>{togglerTitle}</TogglerTitle>
      {togglerOptions.map(({ code, text }, i) => (
        <React.Fragment key={`${code}${i}`}>
          <TogglerRadioOption
            type="radio"
            name={code}
            id={`${code}${i}`}
            value={code}
            checked={selectedValue === code}
            onChange={handleOptionChange}
          />
          <TogglerLabelOption htmlFor={`${code}${i}`}>
            {text}
          </TogglerLabelOption>
        </React.Fragment>
      ))}
    </TogglerWrapper>
  );
};

Toggler.propTypes = {
  togglerTitle: PropTypes.string,
  selectedValue: PropTypes.string,
  togglerOptions: PropTypes.array,
  setToggleValue: PropTypes.func
};

export default Toggler;
