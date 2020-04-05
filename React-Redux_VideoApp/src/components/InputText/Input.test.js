import React from 'react';
import { shallow } from 'enzyme';
import InputText from './InputText';
import { SearchInputText } from './styles';

describe('Component InputText', () => {
  let wrapper, defaultProps;

  beforeEach(() => {
    defaultProps = {
      inputValue: 'mockInputValue',
      setInputValue: jest.fn(),
      executeActionByEnter: jest.fn()
    };
    wrapper = shallow(<InputText {...defaultProps} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call defaultProps.setInputValue with correct args if call onChange', () => {
   const mockVal = 'mockVal'

    wrapper
      .find(SearchInputText)
      .props()
      .onChange({ target: { value: mockVal } });
    expect(defaultProps.setInputValue).toHaveBeenCalledWith(mockVal);
  });

  it('should call defaultProps.executeActionByEnter if call onKeyUp and key === ENTER', () => {
    wrapper
      .find(SearchInputText)
      .props()
      .onKeyUp({ key: 'Enter' });
    expect(defaultProps.executeActionByEnter).toHaveBeenCalledTimes(1);
  });

  it('should not call defaultProps.executeActionByEnter if call onKeyUp and key !== ENTER', () => {
    wrapper
      .find(SearchInputText)
      .props()
      .onKeyUp({ key: 'Space' });
    expect(defaultProps.executeActionByEnter).toHaveBeenCalledTimes(0);
  });
});
