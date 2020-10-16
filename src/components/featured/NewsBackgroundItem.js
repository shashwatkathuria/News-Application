import * as React from 'react';
import { ImageBackground, Text, TouchableOpacity,  View } from 'react-native';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import { constants, newsBackgroundItemStyles as commonStyles, newsCarouselItemStyles as carouselItemStyles, newsHeadlineItemStyles as headlineItemStyles } from '../../stylesheets/main';
import { MoreIcon } from '../common/Icons';

const NewsBackgroundItem = (props) => {
    const navigation = useNavigation();
    const styles = props.type === 'Carousel' ? carouselItemStyles : headlineItemStyles;
    const height = props.type === 'Carousel' ? 180 : 240;

    return (
      <TouchableOpacity
        style={styles.container}
        activeOpacity={constants.CLICK_OPACITY}
        onPress={() => navigation.navigate("WebViewScreen", { uri: props.article.url })}>
          <ImageBackground
            source={{ uri: props.article.urlToImage }}
            style={{...commonStyles.imageBackground, height }}>
            <View style={commonStyles.imageBackgroundContentContainer}>

                <View style={commonStyles.newsSourceContainer} >
                  <Text style={{...commonStyles.newsTopText, fontWeight: 'bold' }}>
                    {props.article.source.name}
                  </Text>
                  <Text style={commonStyles.newsTopText}>
                    {moment(props.article.publishedAt).fromNow()}
                  </Text>
                </View>

                <TouchableOpacity
                  style={commonStyles.optionsContainer}
                  onPress={() => props.openModal()}>
                  <MoreIcon color={constants.STANDARD_LIGHT}/>
                </TouchableOpacity>

                <View style={commonStyles.newsHeadingContainer}>
                  <Text
                    style={styles.newsHeadingText}
                    numberOfLines={constants.NEWS_ITEM_LINES_LIMIT}>
                    {props.article.title}
                  </Text>
                </View>

              </View>
            </ImageBackground>
      </TouchableOpacity>
    );
}

export default NewsBackgroundItem;
