import { StyleSheet } from 'react-native';
import * as constants from '../constants';

const styles = StyleSheet.create({
  imageBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: constants.BORDER_RADIUS,
    overflow: 'hidden'
  },
  newsTopText: {
    color: constants.STANDARD_LIGHT,
    fontSize: 12,
    fontFamily: constants.FONT_FAMILY
  },
  newsHeadingContainer: {
    position: 'absolute',
    bottom: constants.MARGIN_MEDIUM,
    left: constants.MARGIN_MEDIUM,
    marginRight: constants.MARGIN_LARGE
  },
  imageBackgroundContentContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: constants.OPACITY_BACKGROUND
  },
  newsSourceContainer: {
    position: 'absolute',
    top: constants.MARGIN_MEDIUM,
    left: constants.MARGIN_MEDIUM,
  },
  optionsContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: constants.MARGIN_MEDIUM,
    zIndex: 10
  },
  extraDataText: {
    color: constants.STANDARD_LIGHT,
    fontSize: 12,
    fontFamily: constants.FONT_FAMILY
  }
});

export default styles;
