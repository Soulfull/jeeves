import React, {PropTypes} from 'react';

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

const LoginPage = () => (
  <Page loginScreen>
    <div className="page-wrapper page-wrapper--start">
      <div className="app-logo">
       LOGO
      </div>
      <div>
        <div className="title">jeeves</div>
        <div className="sub-title">Next level restaurant experience</div>
      </div>
      <div className="buttons-group">
        <Button href="/add-card/">Autgorize with Google</Button>
        <Button href="/add-card/">Autgorize with Facebook</Button>
      </div>
    </div>
  </Page>
);

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