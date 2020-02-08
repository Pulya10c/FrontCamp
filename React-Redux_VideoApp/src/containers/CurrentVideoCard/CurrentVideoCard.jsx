import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  filmPosterPathSelector,
  filmTitleSelector,
  filmRatingSelector,
  filmReleaseDateSelector,
  filmOverviewSelector
} from "selectors/currentVideoSelectors";
import SplitWrapper from "components/SplitWrapper";

const mapStateToProps = state => ({
  posterPath: filmPosterPathSelector(state),
  title: filmTitleSelector(state),
  rating: filmRatingSelector(state),
  releaseDate: filmReleaseDateSelector(state),
  overview: filmOverviewSelector(state)
});

const CurrentVideoCard = ({
  posterPath,
  title,
  rating,
  releaseDate,
  overview
}) => {
  return (
    <SplitWrapper>
      <div>
        <img src={posterPath} />
      </div>
      <div>
        <h2>{title} </h2>
        <p>
          Rating: {rating} Release date: {releaseDate}
        </p>
        <p>{overview}</p>
      </div>
    </SplitWrapper>
  );
};

CurrentVideoCard.propTypes = {
  posterPath: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.number,
  releaseDate: PropTypes.string,
  overview: PropTypes.string
};

export default connect(mapStateToProps, null)(CurrentVideoCard);
