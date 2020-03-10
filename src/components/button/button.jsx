import React from "react";
import PropTypes from "prop-types";

export const Button = ({onClick}) => {
  return <div className="catalog__more">
    <button onClick={onClick} className="catalog__button" type="button">Show more</button>
  </div>;
};

Button.propTypes = {
  onClick: PropTypes.func,
};

