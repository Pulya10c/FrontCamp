import React from "react";
import { shallow } from "enzyme";
import mockReactRedux from "mocks/mockReactRedux";
import VideoListGrid from "./";

jest.mock("react-redux", () => mockReactRedux);

const mockMovies = [
  {
    id: "mockId",
    title: "mockTitle",
    release_date: "mockRelease_date",
    poster_path: "mockPoster_path",
    genres: ["mockGenre"]
  }
];

jest.mock("selectors/videoListSelectors", () => ({
  moviesDataSelector: jest.fn(() => mockMovies)
}));

describe("Component VideoListGrid", () => {
  const { mapStateToProps, ConnectedComponent } = VideoListGrid;

  it("should render correctly", () => {
    const { props } = mapStateToProps();
    expect(shallow(<ConnectedComponent {...props} />)).toMatchSnapshot();
  });

  it("should pass correct props to component from mapStateToProps", () => {
    const { props } = mapStateToProps();
    expect(props).toEqual({
      movies: mockMovies
    });
  });
});
