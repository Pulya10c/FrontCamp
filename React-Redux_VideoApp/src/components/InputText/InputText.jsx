import React, { Component } from "react";
import { SearchInputText } from "./styles";

class InputText extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // };

  render() {
    const { inputValue } = this.props;
    return (
      <SearchInputText
        type="text"
        value={inputValue}
        onChange={this.handleSearchChange}
        onKeyUp={this.handleSearchKeyUp}
      />
    );
  }

  handleSearchKeyUp = ({ key }) => {
    if (key === "Enter") {
      const { executeActionByEnter } = this.props;
      executeActionByEnter();
    }
  };

  handleSearchChange = ({ target: { value } }) => {
    const { setInputValue } = this.props;
    setInputValue(value);
  };
}

export default InputText;
