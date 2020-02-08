import React from 'react';
import { shallow } from 'enzyme';
import MainTitle from './';

describe('Component MainTitle', () => {
  it('should render correctly', () => {
    expect(shallow(<MainTitle />)).toMatchSnapshot();
  });
});
