import * as React from 'react';
import { ScrollView } from 'react-native';
import NewsBackgroundItem from './NewsBackgroundItem';
import { newsCarouselStyles as styles } from '../../stylesheets/main';

export default class NewsCarousel extends React.Component {
  constructor (props) {
    super(props);
  }
  renderCarouselItem(item, index) {
    return (
      <NewsBackgroundItem
        key={index}
        openModal={() => this.props.openModal(item)}
        type='Carousel'
        article={item}/>
    );
  }
  render() {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carouselContainer}>
        {this.props.newsArticles.map((element, index) => this.renderCarouselItem(element, index))}
      </ScrollView>
    );
  }
}
