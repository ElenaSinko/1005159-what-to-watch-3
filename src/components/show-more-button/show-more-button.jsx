import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";
import PropTypes from "prop-types";


const ShowMoreButton = (onShowMoreButtonClick) => {
  return <div className="catalog__more">
    <button onClick={() => onShowMoreButtonClick()} className="catalog__button" type="button">Show more</button>
  </div>;
};

ShowMoreButton.propTypes = {
  onShowMoreButtonClick: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onShowMoreButtonClick() {
    dispatch(ActionCreator.showMoreFilms());
  },
});


const connectedComponent = connect(null, mapDispatchToProps)(ShowMoreButton);
export {connectedComponent as ShowMoreButton};

