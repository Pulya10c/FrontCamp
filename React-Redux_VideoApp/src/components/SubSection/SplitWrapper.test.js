import React from 'react';
import { shallow } from 'enzyme';
import SubSection from './';

describe('Component SubSection', () => {
  it('should render correctly', () => {
    expect(shallow(<SubSection />)).toMatchSnapshot();
  });
});
