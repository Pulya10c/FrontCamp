import React from 'react';
import { shallow } from 'enzyme';
import mockReactRedux from 'mocks/mockReactRedux';
import mockReactRouter from 'mocks/mockReactRouter';
import * as uiStateSelectors from 'selectors/uiStateSelectors';
import withErrorAndFetchingRoutePage from './withErrorAndFetchingRoutePage';

jest.mock('react-router', () => mockReactRouter);
jest.mock('react-redux', () => mockReactRedux);
uiStateSelectors.fetchingSelector = jest.fn(() => false);
uiStateSelectors.errorSelector = jest.fn(() => false);

describe('Component with withErrorAndFetchingRoutePage', () => {
  let wrapper, TargetPage, ReduxConnectedComponent, TargetPageContainer;

  const PageComponent = props => <div {...props}>Page Component</div>;
  TargetPage = withErrorAndFetchingRoutePage(PageComponent);
  ReduxConnectedComponent = TargetPage.ConnectedComponent;
  TargetPageContainer = ReduxConnectedComponent.ConnectedComponent;

  beforeEach(() => {
    wrapper = shallow(<TargetPageContainer />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
