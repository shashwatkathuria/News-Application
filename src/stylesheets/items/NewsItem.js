import { StyleSheet } from 'react-native';
import * as constants from '../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.STANDARD_LIGHT,
    marginLeft: constants.MARGIN_LARGE,
    marginRight: constants.MARGIN_LARGE,
    marginTop: constants.MARGIN_MEDIUM + constants.MARGIN_SMALL,
    borderRadius: constants.BORDER_RADIUS,
    shadowColor: constants.STANDARD_DARK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2.5
  },
  newsSourceText: {
    fontWeight: constants.NEWS_ITEM_FONT_WEIGHT,
    color: constants.THEME,
    fontSize: 14,
  },
  newsHeadingText: {
    marginRight: 5,
    fontWeight: constants.NEWS_ITEM_FONT_WEIGHT,
    color: constants.STANDARD_DARK,
    fontSize: 16,
  },
  extraDataText: {
    color: constants.STANDARD_MEDIUM,
    fontSize: 12,
  },
  commonText: {
    fontFamily: constants.FONT_FAMILY
  },
  rowBothEnds: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default styles;
