import React from "react";
import { shallow } from "enzyme";
import mockReactRedux from "mocks/mockReactRedux";
import { isVideoListPath } from "selectors/routerSelectors";
import { resetSearchAngRedirect } from "actions/currentVideoActions";

import MainTitleAndSearchIcon from "./MainTitleAndSearchIcon";

jest.mock("react-redux", () => mockReactRedux);

const mockIsVideoListPath = false;

jest.mock("selectors/routerSelectors", () => ({
  isVideoListPath: jest.fn(() => mockIsVideoListPath)
}));

const mockResetSearchAngRedirect = "mockResetSearchAngRedirect";

jest.mock("actions/currentVideoActions", () => ({
  resetSearchAngRedirect: jest.fn(() => mockResetSearchAngRedirect)
}));

describe("Component MainTitleAndSearchIcon", () => {
  const {
    mapStateToProps,
    mapDispatchToProps,
    ConnectedComponent
  } = MainTitleAndSearchIcon;

  it("should render correctly", () => {
    const { props } = mapStateToProps();
    expect(shallow(<ConnectedComponent {...props} />)).toMatchSnapshot();
  });

  it("should pass correct props to component from mapStateToProps", () => {
    const { props } = mapStateToProps();
    expect(props).toEqual({
      isVideoListPath: mockIsVideoListPath
    });
  });

  it("should pass correct props to component from mapDispatchToProps", () => {
    const { props, dispatch } = mapDispatchToProps();
    props.resetSearchAngRedirect();
    expect(resetSearchAngRedirect).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(mockResetSearchAngRedirect);
  });
});
