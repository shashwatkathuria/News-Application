import React from 'react';
import { FlatList, RefreshControl, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchNewsArticles } from '../../actions/NewsActions';
import FeaturedSection from '../featured/FeaturedSection';
import NewsItem from '../items/NewsItem';
import NewsItemModal from '../common/NewsItemModal';
import NewsPill from '../common/NewsPill';
import FilterMenu from '../filter/menu/FilterMenu';
import FilterBar from '../filter/bar/FilterBar';
import LoadingSpinner from '../common/LoadingSpinner';
import { NewsPaperIcon, FilterIcon, SaveIcon } from '../common/Icons';
import { constants, newsFeedScreenStyles as styles } from '../../stylesheets/main';

class NewsFeedScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayFilterMenu: false,
      modalNewsArticle: null,
      forceRefresh: false,
      awaitingArticles: [],
      newsArticles: props.newsArticles
    };
  }

  toggleFilterMenu = () => {
    this.setState({
      displayFilterMenu: !this.state.displayFilterMenu
    });
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      headerTitle: (props) => <View/>,
      headerLeft: (props) => (
        <View style={styles.headerLeft}>
          <NewsPaperIcon color={constants.STANDARD_LIGHT}/>
          <Text style={styles.headingText}>
            News
          </Text>
        </View>
      ),
      headerStyle: styles.headerStyle,
      headerTintColor: constants.STANDARD_LIGHT,
      headerRight: (props) => (
        <View style={styles.headerRight}>
          <TouchableOpacity
            activeOpacity={constants.CLICK_OPACITY}
            style={styles.headerRightIcon}
            onPress={() => this.toggleFilterMenu()}>
            <FilterIcon color={constants.STANDARD_LIGHT}/>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headerRightIcon}
            activeOpacity={constants.CLICK_OPACITY}
            onPress={() => this.props.navigation.navigate('SavedNewsScreen')}>
            <SaveIcon color={constants.STANDARD_LIGHT}/>
          </TouchableOpacity>
        </View>
      )
    });

    this.props.fetchNewsArticles();
    setInterval(this.props.fetchNewsArticles, 60 *  1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.forceRefresh) {
      this.setState({
        newsArticles: this.props.newsArticles,
        forceRefresh: false
      });
    } else if (prevProps.newsArticles.length > 0 && this.props.newsArticles.length > 0 && (prevProps.newsArticles[0].title !== this.props.newsArticles[0].title) && this.state.awaitingArticles.length === 0) {
        this.setState({ awaitingArticles: this.props.newsArticles });
    } else if (prevProps.newsArticles.length === 0 && this.props.newsArticles.length > 0) {
      this.setState({ newsArticles: this.props.newsArticles });
    }
  }

  openModal(newsArticle) {
    this.setState({ modalNewsArticle: newsArticle });
  }

  closeModal() {
    this.setState({ modalNewsArticle: null });
  }

  refresh() {
    this.props.fetchNewsArticles();
  }

  getFilteredArticles() {
    const filters = this.props.filteredNewsSources;
    let articlesCopy = [...this.state.newsArticles];
    return articlesCopy.filter((article) => filters.length === 0 ? true : filters.includes(article.source.name));
  }

  renderHeaderComponent(featuredSectionArticles) {
    if (featuredSectionArticles.length === 0) {
      return <View/>;
    }
    return (
      <FeaturedSection
        openModal={(newsArticle) => this.openModal(newsArticle)}
        newsArticles={featuredSectionArticles} />
    );
  }

  renderNewsItem(item, index) {
    let variant;
    switch(index % 4) {
      case 2:
        variant = 'VerticalNewsItem';
        break;
      default:
        variant = 'HorizontalNewsItem';
        break;
    }
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

  async refreshNews() {
    this.setState({ forceRefresh: true });
    this.props.fetchNewsArticles();
  }

  newNewsAction() {
    const flatListRef = this.flatListRef;
    this.setState({
      newsArticles: this.state.awaitingArticles,
      awaitingArticles: []
    }, function () { flatListRef.scrollToOffset({ animated: true, offset: 0 }); });
  }

  render() {

    if (this.props.newsArticles.length === 0) {
      return <LoadingSpinner/>;
    }

    const filteredArticles = this.getFilteredArticles();
    let featuredSectionArticles = [];
    let listArticles = [];

    if (this.props.filteredNewsSources.length > 0) {
      listArticles = filteredArticles;
    } else {
      listArticles = this.state.newsArticles.slice(6, this.state.newsArticles.length);
      featuredSectionArticles = this.state.newsArticles;
    }

    return (
      <View>
        <NewsItemModal
          onDismiss={() => this.closeModal()}
          article={this.state.modalNewsArticle}
          visible={!!this.state.modalNewsArticle}/>
        {this.state.displayFilterMenu && (
          <FilterMenu
            newsArticles={this.props.newsArticles}
            onDismiss={this.toggleFilterMenu}/>
        )}
        {this.props.filteredNewsSources && (
          <FilterBar newsArticles={this.props.newsArticles}/>
        )}
        {this.state.awaitingArticles.length > 0 && (
          <NewsPill onPress={() => this.newNewsAction()} />
        )}
        <FlatList
          ref={(ref) => { this.flatListRef = ref; }}
          renderItem={({ item, index }) => this.renderNewsItem(item, index)}
          refreshControl={<RefreshControl refreshing={this.state.forceRefresh} onRefresh={() => this.refreshNews()} />}
          data={listArticles}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={() => this.renderHeaderComponent(featuredSectionArticles)}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  newsArticles: state.newsReducer.newsArticles,
  filteredNewsSources: state.newsReducer.filteredNewsSources
})

const mapDispatchToProps = (dispatch) => ({
  fetchNewsArticles: () => dispatch(fetchNewsArticles())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeedScreen);
