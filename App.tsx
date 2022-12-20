import React from 'react'
import { View, Text } from 'react-native'
import Routes from './src/navigation'
import { Provider } from "react-redux";
import { store,persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  )
}
export default App
