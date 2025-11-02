import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PersistGate } from 'redux-persist/integration/react';
import rootReducer from './src/reducers/RootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  })
});
let persistor = persistStore(store);

import App from './src/components/App';
import LoadingSpinner from './src/components/common/LoadingSpinner';

function AppContainer() {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingSpinner/>} persistor={persistor}>
        <App/>
      </PersistGate>
    </Provider>
  );
}

export default AppContainer;