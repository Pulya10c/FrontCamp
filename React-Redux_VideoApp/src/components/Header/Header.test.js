import React from 'react';
import { shallow } from 'enzyme';
import Header from './';

describe('Component Header', () => {
  it('should render correctly', () => {
    expect(shallow(<Header />)).toMatchSnapshot();
  });
});
