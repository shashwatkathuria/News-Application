import { StyleSheet } from 'react-native';
import * as constants from '../../constants';

const styles = StyleSheet.create({
  filterOptionContainer: {
    flexDirection: 'row',
    padding: constants.MARGIN_LARGE,
    alignItems: 'center'
  },
  text: {
    marginLeft: constants.MARGIN_MEDIUM,
    fontSize: 17,
    fontFamily: constants.FONT_FAMILY
  }
});

export default styles;
