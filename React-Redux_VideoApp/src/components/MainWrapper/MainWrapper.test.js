import React from 'react';
import { shallow } from 'enzyme';
import MainWrapper from './';

describe('Component MainWrapper', () => {
  it('should render correctly', () => {
    expect(shallow(<MainWrapper />)).toMatchSnapshot();
  });
});
