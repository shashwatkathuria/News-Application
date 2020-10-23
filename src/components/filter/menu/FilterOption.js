import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { addFilter, removeFilter } from '../../../actions/NewsActions';
import { UnselectedOptionIcon, SelectedOptionIcon } from "../../common/Icons";
import { constants, filterOptionStyles as styles } from '../../../stylesheets/main';

class FilterOption extends React.Component {

  handleFilterAction() {
    if (this.props.isFiltered) {
      this.props.removeFilter(this.props.newsSource);
    } else {
      this.props.addFilter(this.props.newsSource);
    }
  }

  render() {
    let color = this.props.isFiltered ? constants.THEME : constants.STANDARD_DARK;
    let Icon = this.props.isFiltered ? SelectedOptionIcon : UnselectedOptionIcon;

    return (
      <TouchableOpacity
        style={styles.filterOptionContainer}
        onPress={() => this.handleFilterAction()}>
          {this.props.isFiltered ? <SelectedOptionIcon color={constants.THEME} /> : <UnselectedOptionIcon color={constants.STANDARD_MEDIUM} />}
          <View style={{ flex: 1 }}>
            <Text style={{...styles.text, color }}>
              {this.props.newsSource}
            </Text>
          </View>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  addFilter: (newsSource) => dispatch(addFilter(newsSource)),
  removeFilter: (newsSource) => dispatch(removeFilter(newsSource))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterOption);
