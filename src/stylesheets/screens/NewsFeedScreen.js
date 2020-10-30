import { Dimensions, StyleSheet } from 'react-native';
import * as constants from '../constants';

const windowHeight: number = Dimensions.get('window').height;

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: constants.MARGIN_LARGE,
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: constants.MARGIN_LARGE
  },
  headerRightIcon: {
    paddingRight: constants.MARGIN_MEDIUM,
    paddingLeft: constants.MARGIN_MEDIUM
  },
  headingText: {
    marginLeft: constants.MARGIN_MEDIUM,
    fontSize: 20,
    fontWeight: 'bold',
    color: constants.STANDARD_LIGHT,
    fontFamily: constants.FONT_FAMILY,
  },
  headerStyle: {
    backgroundColor: constants.THEME
  }
});

export default styles;
