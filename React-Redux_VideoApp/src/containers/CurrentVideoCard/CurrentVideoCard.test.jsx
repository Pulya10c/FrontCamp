import React from "react";
import { shallow } from "enzyme";
import mockReactRedux from "mocks/mockReactRedux";
import {
  filmPosterPathSelector,
  filmTitleSelector,
  filmRatingSelector,
  filmReleaseDateSelector,
  filmOverviewSelector
} from "selectors/currentVideoSelectors";
import CurrentVideoCard from "./CurrentVideoCard";

jest.mock("react-redux", () => mockReactRedux);

const mockFilmPosterPath = "mockFilmPosterPath";
const mockFilmTitle = "mockFilmTitle";
const mockRating = 5;
const mockReleaseDate = "mockDate";
const mockOverview = "mockOverview";

jest.mock("selectors/currentVideoSelectors", () => ({
  filmPosterPathSelector: jest.fn(() => mockFilmPosterPath),
  filmTitleSelector: jest.fn(() => mockFilmTitle),
  filmRatingSelector: jest.fn(() => mockRating),
  filmReleaseDateSelector: jest.fn(() => mockReleaseDate),
  filmOverviewSelector: jest.fn(() => mockOverview)
}));

describe("Component CurrentVideoCard", () => {
  const { mapStateToProps, ConnectedComponent } = CurrentVideoCard;

  it("should render correctly", () => {
    const { props } = mapStateToProps();
    expect(shallow(<ConnectedComponent {...props} />)).toMatchSnapshot();
  });

  it("should pass correct props to component from mapStateToProps", () => {
    const { props } = mapStateToProps();
    expect(props).toEqual({
      posterPath: mockFilmPosterPath,
      title: mockFilmTitle,
      rating: mockRating,
      releaseDate: mockReleaseDate,
      overview: mockOverview
    });
  });
});
