import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {Main} from "../main/main.jsx";
import {MoviePage} from "../movie-page/movie-page.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import {PAGES} from "./../../consts.js";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
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
          <Route exact path="/sign-in">
            <SignIn
              onReplayButtonClick={() => {}}
              onSubmit={() => {}}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

