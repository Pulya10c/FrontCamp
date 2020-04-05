import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './Spinner';

describe('Component Spinner', () => {
  it('should render correctly', () => {
    expect(shallow(<Spinner />)).toMatchSnapshot();
  });
});
