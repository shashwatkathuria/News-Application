import { StyleSheet } from 'react-native';
import * as constants from '../../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.THEME,
    flexDirection: 'row',
    padding: constants.MARGIN_MEDIUM,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: constants.MARGIN_MEDIUM
  },
  text: {
    fontSize: 12,
    color: constants.STANDARD_LIGHT,
    flex: 1,
    fontFamily: constants.FONT_FAMILY
  }
});

export default styles;
