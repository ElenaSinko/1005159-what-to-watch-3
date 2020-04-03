import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
// import {ActionCreator} from "../../reducer/user/user.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";


class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: ``,
      password: ``,
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleEmailChange(evt) {
    this.setState({email: evt.target.value});
  }

  handlePasswordChange(evt) {
    this.setState({password: evt.target.value});
  }
  handleSubmit(evt) {
    evt.preventDefault();
    const {email, password} = this.state;
    const {login} = this.props;
    login({email, password});
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
                <input onChange={this.handleEmailChange} className="sign-in__input" value={email} type="email" placeholder="Email address" name="user-email" id="user-email"/>
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input onChange={this.handlePasswordChange} className="sign-in__input" value={password} type="password" placeholder="Password" name="user-password" id="user-password"/>
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button onClick={this.handleSubmit} type="submit" className="sign-in__btn">Sign in</button>
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

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onReplayButtonClick: PropTypes.func.isRequired,
  login: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  login: ({email, password}) => {
    dispatch(UserOperation.login({email, password}));
  },
});

const connectedComponent = connect(null, mapDispatchToProps)(SignIn);
export {connectedComponent as SignIn};


