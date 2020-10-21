import * as React from 'react';
import { Animated, Dimensions, Modal, PanResponder, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { clearFilters } from '../../../actions/NewsActions';
import FilterOption from './FilterOption';
import { SolidFilterIcon } from '../../common/Icons';
import { constants, commonFilterStyles as commonStyles, filterMenuStyles as styles } from '../../../stylesheets/main';

class FilterMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      panY: new Animated.Value(-Dimensions.get('window').height),
    };

    this.resetPositionAnimation = Animated.timing(this.state.panY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false
    });

    this.closeAnimation = Animated.timing(this.state.panY, {
      toValue: -Dimensions.get('window').height,
      duration: 100,
      useNativeDriver: false
    });

    this.panResponders = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderMove: Animated.event([
        null,
        { dy: this.state.panY },
      ], { useNativeDriver: false }),
      onPanResponderRelease: (e, gs) => {
        if (gs.dy < 0 && gs.vy < -0.2) {
          return this.closeAnimation.start(() => this.props.onDismiss());
        }
        return this.resetPositionAnimation.start();
      },
    });
    this.resetPositionAnimation.start();
  }

  handleDismiss() {
    this.closeAnimation.start(() => this.props.onDismiss());
  }


  getAllNewsSources() {
    let newsSources = [...new Set(this.props.newsArticles.map((element) => element.source.name))];
    return newsSources;
  }

  getSearchResults() {
    let newsSources = this.getAllNewsSources();
    if (this.state.searchValue !== '') {
      newsSources = newsSources.filter((newsSource) => newsSource.toUpperCase().includes(this.state.searchValue.toUpperCase()));
    }
    return newsSources;
  }

  handleSearchInputChange(searchInput) {
    this.setState({ searchValue: searchInput });
  }

  renderItem(item, index) {
    return (
      <View key={index}>
        {index > 0 && <View style={styles.horizontalSeparator}/>}
        <FilterOption
          newsSource={item}
          isFiltered={this.props.filteredNewsSources.includes(item)}/>
      </View>
    );
  }

  render() {
    const top = this.state.panY.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: [-1, 0, 0],
    });

    return (
      <Modal
        animated
        animationType='fade'
        visible={this.props.visible}
        transparent
        onRequestClose={() => this.handleDismiss()}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => this.handleDismiss()}
          style={styles.overlay}>

            <Animated.View {...this.panResponders.panHandlers} style={{...styles.modalContainer, top }}>
              <View style={{...styles.headingContainer }}>
                <SolidFilterIcon color={constants.STANDARD_LIGHT} />
                <Text style={styles.headingText}>
                  Select Sources
                </Text>
              </View>

              <View style={styles.topRow}>
                <TextInput
                  onChangeText={(searchValue) => this.handleSearchInputChange(searchValue)}
                  placeholder='Search Sources'
                  style={styles.textInput}/>
                <TouchableOpacity
                  style={styles.clearFiltersContainer}
                  onPress={this.props.clearFilters}>
                  <Text style={{...commonStyles.clearAllText, ...styles.clearFiltersText}}>
                    Clear Filters
                  </Text>
                </TouchableOpacity>
              </View>

              <ScrollView style={{ maxHeight: 320 }}>
                {this.getSearchResults().map((item, index) => this.renderItem(item, index))}
              </ScrollView>

              <View style={styles.bottomBarContainer}>
                <View style={styles.bottomBar}/>
              </View>
            </Animated.View>

        </TouchableOpacity>
      </Modal>
    );
  }
}


const mapStateToProps = (state) => ({
  filteredNewsSources: state.newsReducer.filteredNewsSources
})

const mapDispatchToProps = (dispatch) => ({
  clearFilters: () => dispatch(clearFilters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterMenu);
