import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from './ErrorBoundary';

describe('Component ErrorBoundary', () => {
  let wrapper;
  const Child = () => <div>child</div>;
  beforeEach(() => {
    wrapper = shallow(
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>
    );
  });

  it('should render Child correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render ErrorWrapper correctly', () => {
    wrapper.setState({ hasError: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should call window.location.reload if to call handleClickReloadPage', () => {
    window.location.reload = jest.fn();
    wrapper.instance().handleClickReloadPage();
    expect(window.location.reload).toHaveBeenCalled();
  });
});
