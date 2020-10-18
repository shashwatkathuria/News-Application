import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ArrowUp } from './Icons';
import { constants, newsPillStyles as styles } from '../../stylesheets/main';

const NewsPill = props => (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={constants.CLICK_OPACITY}
      style={styles.container}>
      <ArrowUp color={constants.STANDARD_LIGHT} />
      <Text style={styles.text}>
        New Posts
      </Text>
    </TouchableOpacity>
);

export default NewsPill;
