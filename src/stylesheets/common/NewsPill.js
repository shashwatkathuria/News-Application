import { StyleSheet } from 'react-native';
import * as constants from '../constants';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 3,
    marginTop: constants.MARGIN_MEDIUM,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: constants.THEME,
    padding: constants.MARGIN_MEDIUM,
    paddingRight: constants.MARGIN_LARGE,
    borderRadius: 12,
  },
  text: {
    fontFamily: constants.FONT_FAMILY,
    color: constants.STANDARD_LIGHT,
    fontSize: 15,
    marginLeft: constants.MARGIN_SMALL
  }
});

export default styles;
