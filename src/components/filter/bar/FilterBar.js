import * as React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { clearFilters } from '../../../actions/NewsActions';
import FilterPill from './FilterPill';
import { constants, commonFilterStyles as commonStyles, filterBarStyles as styles } from '../../../stylesheets/main';

class FilterBar extends React.Component {
  renderFilterPill(newsSource, index) {
    return (
      <FilterPill
        key={index}
        newsSource={newsSource}/>
    );
  }

  getAllNewsSources() {
    let newsSources = [...new Set(this.props.newsArticles.map((element) => element.source.name))];
    return newsSources;
  }

  render() {
    const filters = this.getAllNewsSources().filter(newsSource => this.props.filteredNewsSources.includes(newsSource));
    if (filters.length == 0) {
      return <View/>;
    }

    return (
      <View style={styles.horizontalScrollContainer}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal>
          {filters.length > 1 && (
            <TouchableOpacity
              style={styles.clearFiltersContainer}
              onPress={this.props.clearFilters}>
              <Text style={{...commonStyles.clearAllText, ...styles.clearFiltersText}}>
                Clear All
              </Text>
            </TouchableOpacity>
          )}
          {filters.length > 0 && filters.map((newsSource, index) => this.renderFilterPill(newsSource, index))}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  filteredNewsSources: state.newsReducer.filteredNewsSources
})

const mapDispatchToProps = (dispatch) => ({
  clearFilters: () => dispatch(clearFilters())
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
