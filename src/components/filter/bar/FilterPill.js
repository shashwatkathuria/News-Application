import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { addFilter, removeFilter } from '../../../actions/NewsActions';
import { FilterPillCrossIcon } from '../../common/Icons';
import { constants, filterPillStyles as styles } from '../../../stylesheets/main';

class FilterPill extends React.Component {
  handleFilterAction() {
    this.props.removeFilter(this.props.newsSource);
  }

  render() {
    let truncatedNewsSource;
    if (this.props.newsSource.length > 20) {
      truncatedNewsSource = this.props.newsSource.slice(0, 20) + "...";
    } else {
      truncatedNewsSource = this.props.newsSource;
    }

    return (
      <TouchableOpacity
        activeOpacity={constants.CLICK_OPACITY}
        style={styles.container}
        onPress={() => this.handleFilterAction()}>
          <Text
            numberOfLines={1}
            style={styles.text}>
            {truncatedNewsSource}
          </Text>
          <FilterPillCrossIcon color={constants.STANDARD_LIGHT}/>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  removeFilter: (newsSource) => dispatch(removeFilter(newsSource))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterPill);
