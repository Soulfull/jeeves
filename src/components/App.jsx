import React, {PropTypes, Component} from 'react';
import axios from 'axios';
import appState from '../stores/appStore.js';

import {
  Framework7App,
  Page,
  Pages,
  View,
  Views,
} from 'framework7-react';

import Button from '../components/Button.jsx';
import {routes} from '../routes';

const MainViews = (props, context) => {
  return (
    <Views>
      <View id="main-view" main url="/">
        <Pages>
          <LoginPage />
        </Pages>
      </View>
    </Views>
  );
};

class LoginPage extends Component {
  state = {
    login: '',
    password: '',
  };

  changeEmail = (e) => {
    const value = e.target.value;
    this.setState({
      login: value,
    })
  }

  changePass = (e) => {
    const value = e.target.value;
    this.setState({
      password: value,
    })
  }

  register = () => {
    const { login, password } = this.state;
    axios.post('https://jeeves-199912.appspot.com/user/reg', {
      login, password
    })
      .then((response) => {
        console.log(response);
        appState.user = {
          id: response.data.data.id,
          login: response.data.data.login,
          rest_id: response.data.data.rest_id,
        };
        getFramework7().mainView.router.loadPage('/add-card');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Page loginScreen>
        <div className="page-wrapper page-wrapper--start">
          <div className="app-logo">
            LOGO
          </div>
          <div>
            <div className="title">jeeves</div>
            <div className="sub-title">Next level restaurant experience</div>
          </div>
          <form>
            <div className="form-input">
              <div className="form-input__label">Your login</div>
              <input type="text" placeholder="login" onChange={this.changeEmail} />
            </div>
            <div className="form-input">
              <div className="form-input__label">Create a password</div>
              <input type="password" placeholder="password" onChange={this.changePass} />
            </div>
          </form>

          <div className="buttons-group to-bottom">
            <button
              className="app-button"
              onClick={this.register}
            >
              Register
            </button>
          </div>
        </div>
      </Page>
    )
  }
}

MainViews.contextTypes = {
  framework7AppContext: PropTypes.object,
};

export const getFramework7 = () => framework7;
export const getCurrentRoute = () => currentRoute;
let framework7;
let currentRoute;

export const App = () => {
  return (<Framework7App
    themeType="ios"
    routes={routes}
    onFramework7Init={f7 => framework7 = f7}
    onRouteChange={route => currentRoute = route}
  >
    <MainViews />
  </Framework7App>);
};