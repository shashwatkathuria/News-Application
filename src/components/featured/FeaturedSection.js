import React from 'react';
import { View } from 'react-native';
import NewsCarousel from './NewsCarousel';
import NewsBackgroundItem from './NewsBackgroundItem';

const FeaturedSection = (props) => {
  const headlineItem = props.newsArticles[0];
  const carouselItems = props.newsArticles.slice(1, 6);
  return (
    <View>
      <NewsBackgroundItem
        type='Headline'
        openModal={() => props.openModal(headlineItem)}
        article={headlineItem}/>
      <NewsCarousel
        openModal={(newsArticle) => props.openModal(newsArticle)}
        newsArticles={carouselItems}/>
    </View>
  );
}

export default FeaturedSection;
