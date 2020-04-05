import React from 'react';
import { shallow } from 'enzyme';
import Grid from './';

describe('Component Grid', () => {
  it('should render correctly', () => {
    expect(shallow(<Grid />)).toMatchSnapshot();
  });
});
