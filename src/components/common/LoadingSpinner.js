import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DotIndicator } from 'react-native-indicators';
import { constants, loadingSpinnerStyles as styles } from '../../stylesheets/main';

const LoadingSpinner = props => (
  <View style={styles.container}>
    <DotIndicator
      size={constants.LOADING_SPINNER_SIZE}
      color={constants.THEME}/>
  </View>
);

export default LoadingSpinner;
