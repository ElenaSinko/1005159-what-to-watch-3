import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getMyList} from "../../reducer/application-state/selectors";
import {getUserIMG} from "../../reducer/user/selectors";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

const MyList = ({filmCards, userIMG}) => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src={`https://htmlacademy-react-3.appspot.com/` + userIMG} alt="User avatar" width="63" height="63"/>
          </div>
        </div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">
          {filmCards.map((it, i) => <SmallMovieCard
            key={i}
            id={it.id}
            smallMovieCard={it}/>)}
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>

  );
};

const mapStateToProps = (state) => ({
  filmCards: getMyList(state),
  userIMG: getUserIMG(state),
});

MyList.propTypes = {
  filmCards: PropTypes.array,
  userIMG: PropTypes.string,
};

const connectedComponent = connect(mapStateToProps)(MyList);
export {connectedComponent as MyList};
