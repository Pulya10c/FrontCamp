import React from 'react';
import { shallow } from 'enzyme';
import mockReactRedux from 'mocks/mockReactRedux';
import { searchSelector } from 'selectors/videoListSelectors';
import {
  updateFilterConfigBy,
  createSearchAndRedirect
} from 'actions/videoListActions';
import InputTextContainer from './';
import { API } from 'src/constants';

jest.mock('react-redux', () => mockReactRedux);

const mockSearchSelector = 'mockSearchSelector';

jest.mock('selectors/videoListSelectors', () => ({
  searchSelector: jest.fn(() => mockSearchSelector)
}));

const mockSetSearchValue = 'mockSetSearchValue';
const mockCreateSearchAndRedirect = 'mockCreateSearchAndRedirect';

jest.mock('actions/videoListActions', () => ({
  createSearchAndRedirect: jest.fn(() => mockCreateSearchAndRedirect),
  updateFilterConfigBy: {
    search: jest.fn(() => mockSetSearchValue)
  }
}));

describe('Component InputTextContainer', () => {
  const {
    mapStateToProps,
    mapDispatchToProps,
    ConnectedComponent
  } = InputTextContainer;

  it("should render correctly", () => {
    const { props } = mapStateToProps();
    expect(shallow(<ConnectedComponent {...props} />)).toMatchSnapshot();
  });

  it('should pass correct props to component from mapStateToProps', () => {
    const { props } = mapStateToProps();
    expect(props).toEqual({
      searchValue: mockSearchSelector
    });
  });

  it('should pass correct props to component from mapDispatchToProps', () => {
    const { props, dispatch } = mapDispatchToProps();
    props.createSearchAndRedirect();
    expect(createSearchAndRedirect).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(mockCreateSearchAndRedirect);

    const testValue = 'testValue';
    props.setSearchValue(testValue);
    expect(updateFilterConfigBy[API.SEARCH]).toHaveBeenCalledWith(testValue);
    expect(dispatch).toHaveBeenCalledWith(mockSetSearchValue);
  });
});
