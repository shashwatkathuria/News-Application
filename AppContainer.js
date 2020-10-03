import React from 'react';
import { View, Text, Button } from 'react-native';

import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import { PersistGate } from 'redux-persist/integration/react';
import rootReducer from './src/reducers/RootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(
  persistedReducer,
  compose(applyMiddleware(thunk))
);
let persistor = persistStore(store);

import App from './src/components/App';
import LoadingSpinner from './src/components/common/LoadingSpinner';

export default AppContainer = (props) => {
    return (
      <Provider store={store}>
        <PersistGate loading={<LoadingSpinner/>} persistor={persistor}>
          <App/>
        </PersistGate>
      </Provider>
    );
}
