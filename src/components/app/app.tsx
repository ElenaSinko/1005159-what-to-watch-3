import * as React from "react";
import {Switch, Route, Router} from "react-router-dom";
import PrivateRoute from "../private-route/private-route";
import {Main} from "../main/main";
import {MoviePage} from "../movie-page/movie-page";
import {SignIn} from "../sign-in/sign-in";
import {PAGES} from "./../../consts";
import {history} from "../../utils";
import {MyList} from "../my-list/my-list";
import {AuthorizationStatus} from "../../reducer/user/user";
import {AddReview} from "../add-review/add-review";
import {Player} from "../player/player";

interface Props {
  match: any;
}

const App: React.FunctionComponent = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={PAGES.MAIN}>
          <Main/>
        </Route>
        <Route exact path={`${PAGES.FILM}/:id`}>
          {(props: Props) => {
            return <MoviePage
              id={props.match.params.id}
            />;
          }}
        </Route>
        <Route exact path={`${PAGES.PLAYER}/:id`}>
          {(props: Props) => {
            const {match} = props;
            return <Player
              id={match.params.id}
            />;
          }}
        </Route>
        <Route exact path={PAGES.LOGIN}>
          <SignIn />
        </Route>
        <Route exact path={`${PAGES.REVIEW}/:id`}>
          {(props) => {
            const {match} = props;
            return <AddReview
              id={match.params.id}
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


export default App;

