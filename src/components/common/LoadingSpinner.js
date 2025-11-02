import React from 'react';
import { View } from 'react-native';
import { DotIndicator } from 'react-native-indicators';
import { constants, loadingSpinnerStyles as styles } from '../../stylesheets/main';

// Warning due to issue in react-native-indicators library
const origError = console.error;
console.error = (...args) => {
  if (args[0]?.includes?.('A props object containing a "key" prop')) return;
  origError(...args);
};

const LoadingSpinner = props => (
  <View style={styles.container}>
    <DotIndicator
      size={constants.LOADING_SPINNER_SIZE}
      color={constants.THEME}/>
  </View>
);

export default LoadingSpinner;
