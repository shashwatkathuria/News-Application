import { Dimensions, StyleSheet } from 'react-native';
import * as constants from '../../constants';
const windowWidth: number = Dimensions.get('window').width;

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: constants.OPACITY_BACKGROUND,
    flex: 1,
    justifyContent: 'flex-start',
  },
  modalContainer: {
    backgroundColor: constants.STANDARD_LIGHT,
    paddingBottom: constants.MARGIN_MEDIUM + constants.MARGIN_SMALL,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  headingContainer: {
    flexDirection: 'row',
    padding: constants.MARGIN_LARGE,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: constants.THEME
  },
  headingText: {
    color: constants.STANDARD_LIGHT,
    marginLeft: constants.MARGIN_SMALL,
    fontSize: 18,
    alignItems: 'center',
    fontFamily: constants.FONT_FAMILY,
    fontWeight: 'bold',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  clearFiltersContainer: {
    marginRight: constants.MARGIN_LARGE,
    marginLeft: constants.MARGIN_LARGE,
    alignItems: 'center'
  },
  clearFiltersText: {
    fontSize: 15,
  },
  textInput: {
    backgroundColor: constants.INPUT_BACKGROUND,
    borderRadius: constants.BORDER_RADIUS,
    margin: constants.MARGIN_MEDIUM,
    flex: 1,
    fontFamily: constants.FONT_FAMILY,
    paddingLeft: constants.MARGIN_LARGE,
    paddingRight: constants.MARGIN_LARGE
  },
  horizontalSeparator: {
    borderBottomColor: constants.STANDARD_MEDIUM,
    borderBottomWidth: 1,
    marginLeft: constants.MARGIN_LARGE,
    marginRight: constants.MARGIN_LARGE
  },
  bottomBarContainer: {
    flex: 1,
    padding: constants.MARGIN_MEDIUM + constants.MARGIN_SMALL,
    alignItems: 'center'
  },
  bottomBar: {
    height: 5,
    width: 150,
    backgroundColor: constants.STANDARD_DARK,
    borderRadius: 100
  }
});

export default styles;
