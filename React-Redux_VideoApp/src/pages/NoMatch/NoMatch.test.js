import React from 'react';
import { shallow } from 'enzyme';
import NoMatch from './NoMatch';

describe('Component NoMatch', () => {
  it('should render correct message', () => {
    expect(shallow(<NoMatch/>)).toMatchSnapshot();
  });
});
