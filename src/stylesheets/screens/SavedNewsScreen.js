import { Dimensions, StyleSheet } from 'react-native';
import * as constants from '../constants';

const windowHeight: number = Dimensions.get('window').height;

const styles = StyleSheet.create({
  noneSavedContainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textWrapContainer: {
    flexDirection: 'row'
  },
  textWrap: {
    flex: 1,
    flexWrap: 'wrap',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center'
  },
  headerStyle: {
    backgroundColor: constants.THEME
  },
  headerRight: {
    marginRight: constants.MARGIN_LARGE,
    flexDirection: 'row',
    alignItems: 'center'
  },
});

export default styles;
