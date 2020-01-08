import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  TogglerWrapper,
  TogglerRadioOption,
  TogglerLabelOption,
  TogglerTitle
} from "./styles";

class Toggler extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  render() {
    const { togglerTitle, selectedValue, togglerOptions } = this.props;

    return (
      <TogglerWrapper>
        <TogglerTitle>{togglerTitle}</TogglerTitle>
        {togglerOptions.map((option, i) => (
          <React.Fragment key={`${option}${i}`}>
            <TogglerRadioOption
              type="radio"
              name={togglerTitle}
              id={`${togglerTitle}${i}`}
              value={option}
              checked={selectedValue === option}
              onChange={this.handleOptionChange}
            />
            <TogglerLabelOption htmlFor={`${togglerTitle}${i}`}>
              {option}
            </TogglerLabelOption>
          </React.Fragment>
        ))}
      </TogglerWrapper>
    );
  }

  handleOptionChange = ({ target: { value } }) => {
    const { setToggleValue } = this.props;
    setToggleValue(value);
  };
}

export default Toggler;
