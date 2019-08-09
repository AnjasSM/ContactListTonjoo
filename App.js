import React, { Fragment } from 'react';
import AppNavigator from './src/route/AppNavigator';
import { Provider } from 'react-redux';
import store from './src/public/redux/store';

const App = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </Fragment>
  );
};

export default App;
