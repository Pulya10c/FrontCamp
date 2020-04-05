import React from 'react';
import { shallow } from 'enzyme';
import InfoSubTitle from './';

describe('Component InfoSubTitle', () => {
  it('should render correctly', () => {
    expect(shallow(<InfoSubTitle />)).toMatchSnapshot();
  });
});
