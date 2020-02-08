import React from "react";
import { shallow } from "enzyme";
import mockReactRedux from "mocks/mockReactRedux";
import { createSearchAndRedirect } from "actions/videoListActions";

import SearchButton from "./SearchButton";

jest.mock("react-redux", () => mockReactRedux);

const mockCreateSearchAndRedirect = "mockCreateSearchAndRedirect";

jest.mock("actions/videoListActions", () => ({
  createSearchAndRedirect: jest.fn(() => mockCreateSearchAndRedirect)
}));

describe("Component SearchButton", () => {
  const { mapDispatchToProps, ConnectedComponent } = SearchButton;

  it("should render correctly", () => {
    expect(shallow(<ConnectedComponent />)).toMatchSnapshot();
  });

  it("should pass correct props to component from mapDispatchToProps", () => {
    const { props, dispatch } = mapDispatchToProps();
    props.createSearchAndRedirect();
    expect(createSearchAndRedirect).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(mockCreateSearchAndRedirect);
  });
});
