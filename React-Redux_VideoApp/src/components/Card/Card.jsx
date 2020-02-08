import React from "react";
import PropTypes from "prop-types";

import { CardStyled } from "./styles";

const Card = ({ posterPath, title, year, subTitle, to, description }) => {
  return (
    <CardStyled to={to}>
      <img src={posterPath} alt={title} />
      <h4>{title}</h4>
      <span>{subTitle}</span>
      <p>{description}</p>
      <p>{year}</p>
    </CardStyled>
  );
};

Card.propTypes = {
  posterPath: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  subTitle: PropTypes.string,
  to: PropTypes.string,
  description: PropTypes.string
};

export default Card;
