import React from 'react';
import { shallow } from 'enzyme';
import SubTitle from './';

describe('Component SubTitle', () => {
  it('should render correctly', () => {
    expect(shallow(<SubTitle />)).toMatchSnapshot();
  });
});
