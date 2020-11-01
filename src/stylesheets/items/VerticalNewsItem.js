import { StyleSheet } from 'react-native';
import * as constants from '../constants';

const styles = StyleSheet.create({
  newsTextContainer: {
    padding: constants.MARGIN_MEDIUM,
    paddingBottom: 0,
  },
  newsImage: {
    height: 180,
    flex: 1,
    borderTopLeftRadius: constants.BORDER_RADIUS,
    borderTopRightRadius: constants.BORDER_RADIUS
  },
});

export default styles;
