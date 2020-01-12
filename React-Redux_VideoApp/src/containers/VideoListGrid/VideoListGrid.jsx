import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Grid from "components/Grid";
import Card from "components/Card";
import { moviesDataSelector } from "selectors/videoListSelectors";
import { PATHS } from "src/constants";

const mapStateToProps = state => ({
  movies: moviesDataSelector(state)
});

const VideoListGrid = ({ movies }) => {
  // static propTypes = {
  //   prop: PropTypes
  // };

  return (
    <Grid>
      {movies.length
        ? movies.map(({ id, title, release_date, poster_path, genres }) => (
            <Card
              key={id}
              to={`/film/${id}`}
              posterPath={poster_path}
              title={title}
              description={genres.join(" ")}
              year={release_date}
            />
          ))
        : "No films found"}
    </Grid>
  );
};

VideoListGrid.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  release_date: PropTypes.string,
  poster_path: PropTypes.string,
  genres: PropTypes.array
};

export default connect(mapStateToProps, null)(VideoListGrid);
