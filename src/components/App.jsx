import React, {
  Component,
  PropTypes
} from 'react';
import axios from 'axios';
import appState from '../stores/appStore.js';
import {instance} from './api.js';

import {
  Framework7App,
  Page,
  Pages,
  View,
  Views,
} from 'framework7-react';
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
    form: appState.waiter ? 'login' : 'register',
    error: null,
  };

  changeName = (e) => {
    const value = e.target.value;
    this.setState({
      login: value,
    })
  };

  changePass = (e) => {
    const value = e.target.value;
    this.setState({
      password: value,
    })
  };

  loginStuff = () => {
    const { login, password } = this.state;
    axios.post('https://jeeves-199912.appspot.com/waiter/login', {
      login,
      password
    })
      .then((response) => {
        console.log(response);
        appState.user = {
          id: response.data.data.id,
          login: response.data.data.login,
          rest_id: response.data.data.rest_id,
        };
        getFramework7().mainView.router.loadPage('/order-stuff');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  login = () => {
    const { login, password } = this.state;
    axios.post('https://jeeves-199912.appspot.com/user/login', {
      login,
      password
    })
      .then((response) => {
        if (response.data.error) {
          this.setState({
            error: response.data.error
          });
        }
        appState.user = {
          id: response.data.data.id,
          login: response.data.data.login,
        };
        getFramework7().mainView.router.loadPage('/scan');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  register = () => {
    const { login, password } = this.state;
    instance({
      url: '/user/reg',
      data: {
        login,
        password,
      }
    })
      .then((response) => {
        appState.user = {
          id: response.data.data.id,
          login: response.data.data.login,
        };
        getFramework7().mainView.router.loadPage('/add-card');
      })
      .catch((error) => {
        console.log(error);
      });
    // axios.post('https://jeeves-199912.appspot.com/user/reg', {
    //   login, password
    // })
    //   .then((response) => {
    //     appState.user = {
    //       id: response.data.data.id,
    //       login: response.data.data.login,
    //     };
    //     getFramework7().mainView.router.loadPage('/add-card');
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // getFramework7().mainView.router.loadPage('/add-card');
  }

  toogleForm = () => {
    let formState = this.state.form === 'login' ? 'register' : 'login';
    this.setState({
      form: formState
    })
  }

  render() {
    return (
      <Page loginScreen>
        <div className="page-wrapper page-wrapper--start">
          <div className="app-logo">
            LOGO
          </div>
          <div className="title-app">
            <div className="title">jeeves</div>
            <div className="sub-title">Next level restaurant experience</div>
          </div>
          <form className="auth-form">
            <div className="form-input">
              <div className="form-input__label">Your name</div>
              <input type="text" placeholder="name" onChange={this.changeName} />
            </div>
            <div className="form-input">
              <div
                className="form-input__label">{this.state.form === 'login' ? 'Your Password' : 'Create password'}</div>
              <input type="password" placeholder="password" onChange={this.changePass} />
            </div>

            {
              this.state.error ?
                <div className="error" style={{ color: 'red' }}>{this.state.error}</div>
                : null
            }
          </form>

          <div className="buttons-group">

            {
              this.state.form === 'login'
                ? <button
                  className="app-button"
                  onClick={appState.waiter ? this.loginStuff : this.login}
                >
                  Login
                </button>
                : <button
                  className="app-button"
                  onClick={this.register}
                >
                  Register
                </button>
            }
            {
              !appState.waiter ?
                this.state.form === 'login'
                  ? <a href="#" onClick={this.toogleForm} className="button-link">Create account</a>
                  : <a href="#" onClick={this.toogleForm} className="button-link">Already have an
                    account?</a>
                : null
            }
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

export class App extends Component {
  componentWillMount() {
    appState.waiter = this.props.waiter
  }

  render() {
    return (
      <Framework7App
        themeType="ios"
        routes={routes}
        onFramework7Init={f7 => framework7 = f7}
        onRouteChange={route => currentRoute = route}
      >
        <MainViews />
      </Framework7App>
    )
  }
}