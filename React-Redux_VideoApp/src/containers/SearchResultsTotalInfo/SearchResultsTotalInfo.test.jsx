import React from "react";
import { shallow } from "enzyme";
import mockReactRedux from "mocks/mockReactRedux";
import SearchResultsTotalInfo from "./";

jest.mock("react-redux", () => mockReactRedux);

const mockTotal = 42;

jest.mock("selectors/videoListSelectors", () => ({
  videoListTotalSelector: jest.fn(() => mockTotal)
}));

describe("Component SearchResultsTotalInfo", () => {
  const { mapStateToProps, ConnectedComponent } = SearchResultsTotalInfo;

  it("should render correctly", () => {
    const { props } = mapStateToProps();
    expect(shallow(<ConnectedComponent {...props} />)).toMatchSnapshot();
  });

  it("should pass correct props to component from mapStateToProps", () => {
    const { props } = mapStateToProps();
    expect(props).toEqual({
      total: mockTotal
    });
  });
});
