import { Dimensions, StyleSheet } from 'react-native';
import * as constants from '../constants';
const windowWidth: number = Dimensions.get('window').width;

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: constants.OPACITY_BACKGROUND,
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: constants.STANDARD_LIGHT,
    paddingTop: 12,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  text: {
    color: constants.STANDARD_DARK,
    fontFamily: constants.FONT_FAMILY,
    textAlign: 'center'
  },
  helperText: {
    fontSize: 12
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  outerContainer: {
    flexDirection: 'row',
    height: 200,
    margin: constants.MARGIN_LARGE
  },
  optionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  topBarContainer: {
    flex: 1,
    padding: 5,
    alignItems: 'center'
  },
  topBar: {
    height: 5,
    width: 150,
    backgroundColor: constants.STANDARD_DARK,
    borderRadius: 100
  }
});

export default styles;
