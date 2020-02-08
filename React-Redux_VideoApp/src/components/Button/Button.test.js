import React from 'react';
import { shallow } from 'enzyme';
import ButtonComponent from './Button';
import { Button } from './styles';

describe('Component ButtonComponent', () => {
  let wrapper, defaultProps;

  beforeEach(() => {
    defaultProps = {
      btnTitle: 'mockTitle',
      executeAction: jest.fn()
    };
    wrapper = shallow(<ButtonComponent {...defaultProps} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call defaultProps.executeAction if call onClick', () => {
    wrapper
      .find(Button)
      .props()
      .onClick();
    expect(defaultProps.executeAction).toHaveBeenCalled();
  });

  it('should call defaultProps.executeAction if call onKeyUp and key === ENTER', () => {
    wrapper
      .find(Button)
      .props()
      .onKeyUp({ key: 'Enter' });
    expect(defaultProps.executeAction).toHaveBeenCalledTimes(1);
  });

  it('should not call defaultProps.executeAction if call onKeyUp and key !== ENTER', () => {
    wrapper
      .find(Button)
      .props()
      .onKeyUp({ key: 'Space' });
    expect(defaultProps.executeAction).toHaveBeenCalledTimes(0);
  });
});
