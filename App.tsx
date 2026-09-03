import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import RootNavigator from './src/navigation/RootNavigator';
import { configureGoogleSignIn } from './src/services/google-auth';

const App = () => {
  useEffect(() => {
    configureGoogleSignIn();
  }, []);

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;