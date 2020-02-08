import React from "react";
import { shallow } from "enzyme";
import mockReactRedux from "mocks/mockReactRedux";
import SearchResultsGenresInfo from "./";

jest.mock("react-redux", () => mockReactRedux);

const mockGenres = ["mock1", "mock2"];

jest.mock("selectors/currentVideoSelectors", () => ({
  currentVideoGenresSelector: jest.fn(() => mockGenres)
}));

describe("Component SearchResultsGenresInfo", () => {
  const { mapStateToProps, ConnectedComponent } = SearchResultsGenresInfo;

  it("should render correctly", () => {
    const { props } = mapStateToProps();
    expect(shallow(<ConnectedComponent {...props} />)).toMatchSnapshot();
  });

  it("should pass correct props to component from mapStateToProps", () => {
    const { props } = mapStateToProps();
    expect(props).toEqual({
      genres: mockGenres
    });
  });
});
