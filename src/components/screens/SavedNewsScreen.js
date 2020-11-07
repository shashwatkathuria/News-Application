import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchNewsArticles } from '../../actions/NewsActions';
import NewsItem from '../items/NewsItem';
import NewsItemModal from '../common/NewsItemModal';
import FilterMenu from '../filter/menu/FilterMenu';
import LoadingSpinner from '../common/LoadingSpinner';
import { SavedIllustrationIcon, FilterIcon } from '../common/Icons';
import { constants, savedNewsScreenStyles as styles } from '../../stylesheets/main';

class SavedNewsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayFilterMenu: false,
      modalNewsArticle: null
    };
  }
  openModal(newsArticle) {
    this.setState({ modalNewsArticle: newsArticle });
  }

  closeModal() {
    this.setState({ modalNewsArticle: null });
  }

  toggleFilterMenu = () => {
    this.setState({
      displayFilterMenu: !this.state.displayFilterMenu
    });
  }

  getAllNewsSources() {
    let newsSources = [...new Set(this.props.savedNewsArticles.map((element) => element.source.name))];
    return newsSources;
  }

  getFilteredArticles() {
    const filtersPossible = this.getAllNewsSources();
    const filters = this.props.filteredNewsSources.filter(newsSource => filtersPossible.includes(newsSource));
    let articlesCopy = [...this.props.savedNewsArticles];
    return articlesCopy.filter((article) => filters.length === 0 ? true : filters.includes(article.source.name));
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      title: 'Saved Articles',
      headerStyle: styles.headerStyle,
      headerTintColor: constants.STANDARD_LIGHT,
      headerRight: (props) => (
        <View style={styles.headerRight}>
          <TouchableOpacity
            activeOpacity={constants.CLICK_OPACITY}
            onPress={() => this.toggleFilterMenu()}>
            <FilterIcon color={constants.STANDARD_LIGHT}/>
          </TouchableOpacity>
        </View>
      )
    });
  }

  renderNewsItem(item, index) {
    let variant = 'HorizontalNewsItem';
    if (!item.urlToImage) {
      variant = 'PlainNewsItem';
    }
    return (
      <NewsItem
        openModal={() => this.openModal(item)}
        variant={variant}
        article={item}/>
    );
  }

  render() {

    if (this.props.savedNewsArticles.length === 0) {
      return (
        <View style={styles.noneSavedContainer}>
          <SavedIllustrationIcon/>
          <View style={styles.textWrapContainer}>
             <Text style={styles.textWrap}>
               You can access your saved articles here
             </Text>
          </View>
        </View>
      );
    }

    const filteredArticles = this.getFilteredArticles();

    return (
      <View>
        <NewsItemModal
          onDismiss={() => this.closeModal()}
          article={this.state.modalNewsArticle}
          visible={!!this.state.modalNewsArticle}/>
        {this.state.displayFilterMenu && (
          <FilterMenu
            newsArticles={this.props.savedNewsArticles}
            onDismiss={this.toggleFilterMenu}/>
        )}
        <FlatList
          renderItem={({ item, index }) => this.renderNewsItem(item, index)}
          data={filteredArticles}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  filteredNewsSources: state.newsReducer.filteredNewsSources,
  savedNewsArticles: state.newsReducer.savedNewsArticles
})

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SavedNewsScreen);
