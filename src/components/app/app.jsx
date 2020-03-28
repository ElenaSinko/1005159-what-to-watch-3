import React, {PureComponent} from "react";
import {Switch, Route, Router} from "react-router-dom";
import {Main} from "../main/main.jsx";
import {MoviePage} from "../movie-page/movie-page.jsx";
import {SignIn} from "../sign-in/sign-in.jsx";
import {PAGES} from "./../../consts.js";
import {history} from "../../utils.js";
import MyList from "../my-list/my-list.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
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
          <Route exact path={PAGES.LOGIN}>
            <SignIn
              onReplayButtonClick={() => {}}
              onSubmit={() => {}}
            />
          </Route>
          <Route exact path={PAGES.FILM_LIST}>
            <MyList/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

