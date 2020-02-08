import React from 'react';
import { shallow } from 'enzyme';
import SearchIcon from './SearchIcon';
import { Img } from './styles';

describe('Component SearchIcon', () => {
  let wrapper, defaultProps;

  beforeEach(() => {
    defaultProps = {
      executeAction: jest.fn()
    };
    wrapper = shallow(<SearchIcon {...defaultProps} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call defaultProps.executeAction if call onClick', () => {
    wrapper
      .find(Img)
      .props()
      .onClick();
    expect(defaultProps.executeAction).toHaveBeenCalled();
  });
});
