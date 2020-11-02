import { StyleSheet } from 'react-native';
import * as constants from '../constants';

const styles = StyleSheet.create({
  container: {
    width: 300,
    paddingRight: constants.MARGIN_MEDIUM
  },
  newsSourceText: {
    color: constants.STANDARD_LIGHT,
    fontSize: 12,
    fontFamily: constants.FONT_FAMILY,
    flex: 1
  },
  newsHeadingText: {
    color: constants.STANDARD_LIGHT,
    fontSize: 15,
    fontWeight: constants.NEWS_ITEM_FONT_WEIGHT,
    fontFamily: constants.FONT_FAMILY
  },
});

export default styles;
