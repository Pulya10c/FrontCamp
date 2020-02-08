import React from "react";
import { shallow } from "enzyme";
import mockReactRedux from "mocks/mockReactRedux";
import { searchBySelector } from "selectors/videoListSelectors";
import { updateFilterConfigBy } from "actions/videoListActions";
import { API } from "src/constants";

import SearchByToggler from "./SearchByToggler";

jest.mock("react-redux", () => mockReactRedux);

const mockSearchByValue = "mockSearchByValue";

jest.mock("selectors/videoListSelectors", () => ({
  searchBySelector: jest.fn(() => mockSearchByValue)
}));

const mockUpdateFilterConfigBy = "mockUpdateFilterConfigBy";

jest.mock("actions/videoListActions", () => ({
  updateFilterConfigBy: {
    'searchBy': jest.fn(() => mockUpdateFilterConfigBy)
  }
}));

describe("Component SearchByToggler", () => {
  const {
    mapStateToProps,
    mapDispatchToProps,
    ConnectedComponent
  } = SearchByToggler;

  it("should render correctly", () => {
    const { props } = mapStateToProps();
    expect(shallow(<ConnectedComponent {...props} />)).toMatchSnapshot();
  });

  it("should pass correct props to component from mapStateToProps", () => {
    const { props } = mapStateToProps();
    expect(props).toEqual({
      searchByValue: mockSearchByValue
    });
  });

  it("should pass correct props to component from mapDispatchToProps", () => {
    const { props, dispatch } = mapDispatchToProps();
    const testValue = 'test';
    props.setSearchByValue(testValue);
    expect(updateFilterConfigBy[API.SEARCH_BY]).toHaveBeenCalledWith(testValue);
    expect(dispatch).toHaveBeenCalledWith(mockUpdateFilterConfigBy);
  });
});
