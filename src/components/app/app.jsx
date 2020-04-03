import React from "react";
import {Switch, Route, Router} from "react-router-dom";
import PrivateRoute from "../private-route/private-route.jsx";
import {Main} from "../main/main.jsx";
import {MoviePage} from "../movie-page/movie-page.jsx";
import {SignIn} from "../sign-in/sign-in.jsx";
import {PAGES} from "./../../consts.js";
import {history} from "../../utils.js";
import {MyList} from "../my-list/my-list.jsx";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {AddReview} from "../add-review/add-review.jsx";
import {Player} from "../player/player.jsx";
import PropTypes from "prop-types";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={PAGES.MAIN}>
          <Main/>
        </Route>
        <Route exact path={`${PAGES.FILM}/:id`}>
          {(props) => {
            return <MoviePage
              id={props.match.params.id}
            />;
          }}
        </Route>
        <Route exact path={`${PAGES.PLAYER}/:id`}>
          {(props) => {
            return <Player
              id={props.match.params.id}
            />;
          }}
        </Route>
        <Route exact path={PAGES.LOGIN}>
          <SignIn
            onReplayButtonClick={() => {}}
            onSubmit={() => {}}
          />
        </Route>
        <Route exact path={`${PAGES.REVIEW}/:id`}>
          {(props) => {
            return <AddReview
              id={props.match.params.id}
            />;
          }}
        </Route>
        <PrivateRoute exact
          path={PAGES.FILM_LIST}
          authorizationStatus={AuthorizationStatus.AUTH}
          render={() => {
            return (<MyList />);
          }}
        />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  match: PropTypes.func,
};


export default App;

