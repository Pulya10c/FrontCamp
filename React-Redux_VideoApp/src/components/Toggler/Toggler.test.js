import React from 'react';
import { shallow } from 'enzyme';
import Toggler from './Toggler';
import { TogglerRadioOption } from './styles';

describe('Component Toggler', () => {
  let wrapper, defaultProps;

  beforeEach(() => {
    defaultProps = {
      togglerTitle: 'mockTitle',
      selectedValue: 'mockSelectedValue',
      togglerOptions: [
        { code: 'code1', text: 'text1' },
        { code: 'code2', text: 'text2' }
      ],
      setToggleValue: jest.fn()
    };
    wrapper = shallow(<Toggler {...defaultProps} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call defaultProps.setToggleValue with correct args if call TogglerRadioOption onChange', () => {
    const mockVal = 'mockVal';

    wrapper
      .find(TogglerRadioOption)
      .first()
      .props()
      .onChange({ target: { value: mockVal } });
    expect(defaultProps.setToggleValue).toHaveBeenCalledWith(mockVal);
  });
});
