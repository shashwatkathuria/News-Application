import { StyleSheet } from 'react-native';
import * as constants from '../constants';

const styles = StyleSheet.create({
  container: {
    marginLeft: constants.MARGIN_LARGE,
    marginRight: constants.MARGIN_LARGE,
    marginTop: constants.MARGIN_LARGE,
  },
  newsSourceText: {
    color: constants.STANDARD_LIGHT,
    fontSize: 14,
    fontFamily: constants.FONT_FAMILY,
  },
  newsHeadingText: {
    color: constants.STANDARD_LIGHT,
    fontSize: 18,
    fontWeight: constants.NEWS_ITEM_FONT_WEIGHT,
    fontFamily: constants.FONT_FAMILY
  },
});

export default styles;
