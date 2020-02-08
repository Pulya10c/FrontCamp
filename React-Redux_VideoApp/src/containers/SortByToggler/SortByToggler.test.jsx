import React from "react";
import { shallow } from "enzyme";
import mockReactRedux from "mocks/mockReactRedux";
import { sortByValueAndFetchMovies } from "actions/videoListActions";

import SortByToggler from "./";

jest.mock("react-redux", () => mockReactRedux);

const mockSortBySelector = "mockSortBySelector";

jest.mock("selectors/videoListSelectors", () => ({
  sortBySelector: jest.fn(() => mockSortBySelector)
}));

const mockSortByValueAndFetchMovies = "mockSortByValueAndFetchMovies";

jest.mock("actions/videoListActions", () => ({
  sortByValueAndFetchMovies: jest.fn(() => mockSortByValueAndFetchMovies)
}));

describe("Component SortByToggler", () => {
  const {
    mapStateToProps,
    mapDispatchToProps,
    ConnectedComponent
  } = SortByToggler;

  it("should render correctly", () => {
    const { props } = mapStateToProps();
    expect(shallow(<ConnectedComponent {...props} />)).toMatchSnapshot();
  });

  it("should pass correct props to component from mapStateToProps", () => {
    const { props } = mapStateToProps();
    expect(props).toEqual({
      sortValue: mockSortBySelector
    });
  });

  it("should pass correct props to component from mapDispatchToProps", () => {
    const { props, dispatch } = mapDispatchToProps();
    const testValue = "test";
    props.sortByValue(testValue);
    expect(sortByValueAndFetchMovies).toHaveBeenCalledWith(testValue);
    expect(dispatch).toHaveBeenCalledWith(mockSortByValueAndFetchMovies);
  });
});
