import * as React from "react";
import {connect} from "react-redux";
import {Operation as UserOperation} from "../../reducer/user/user";

interface Props {
  onSignInButtonClick: ({email, password}: {email: string; password: string}) => void;
}

interface State {
  email: string;
  password: string;
}

class SignIn extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      email: ``,
      password: ``,
    };
    this._handleEmailChange = this._handleEmailChange.bind(this);
    this._handlePasswordChange = this._handlePasswordChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }
  _handleEmailChange(evt) {
    this.setState({email: evt.target.value});
  }

  _handlePasswordChange(evt) {
    this.setState({password: evt.target.value});
  }
  _handleSubmit(evt) {
    evt.preventDefault();
    const {email, password} = this.state;
    const {onSignInButtonClick} = this.props;
    onSignInButtonClick({email, password});
  }

  render() {
    const {email, password} = this.state;
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

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form onSubmit={(evt) => evt.preventDefault()} action="#" className="sign-in__form">
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input onChange={this._handleEmailChange} className="sign-in__input" value={email} type="email" placeholder="Email address" name="user-email" id="user-email"/>
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input onChange={this._handlePasswordChange} className="sign-in__input" value={password} type="password" placeholder="Password" name="user-password" id="user-password"/>
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button onClick={this._handleSubmit} type="submit" className="sign-in__btn">Sign in</button>
            </div>
          </form>
        </div>

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
  }
}


const mapDispatchToProps = (dispatch) => ({
  onSignInButtonClick: ({email, password}) => {
    dispatch(UserOperation.login({email, password}));
  },
});

const connectedComponent = connect(null, mapDispatchToProps)(SignIn);
export {connectedComponent as SignIn};


