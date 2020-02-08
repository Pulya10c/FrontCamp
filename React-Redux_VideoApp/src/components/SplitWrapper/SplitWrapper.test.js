import React from 'react';
import { shallow } from 'enzyme';
import SplitWrapper from './';

describe('Component SplitWrapper', () => {
  it('should render correctly', () => {
    expect(shallow(<SplitWrapper />)).toMatchSnapshot();
  });
});
