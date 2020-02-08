import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Component Card', () => {
  let wrapper, defaultProps;

  beforeEach(() => {
    defaultProps = {
      posterPath: 'mockPosterPath',
      title: 'mockTitle',
      year: 'mockYear',
      subTitle: 'mockSubTitle',
      to: 'mockTo',
      description: 'mockDescription',
    };
    wrapper = shallow(<Card {...defaultProps} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
