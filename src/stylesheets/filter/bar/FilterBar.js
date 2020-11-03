import { StyleSheet } from 'react-native';
import * as constants from '../../constants';

const styles = StyleSheet.create({
  horizontalScrollContainer: {
    backgroundColor: constants.STANDARD_LIGHT,
    flexDirection: 'row',
    paddingTop: constants.MARGIN_MEDIUM,
    paddingBottom: constants.MARGIN_MEDIUM,
    alignItems: 'center',
  },
  clearFiltersContainer: {
    paddingLeft: constants.MARGIN_LARGE,
    width: 'auto',
    alignSelf: 'center'
  },
  clearFiltersText: {
    fontSize: 12,
  }
});

export default styles;
