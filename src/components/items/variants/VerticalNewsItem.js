import React from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import { constants, commonNewsItemStyles as commonStyles, largeNewsCardItemStyles as styles } from '../../../stylesheets/main';
import MetadataRow from '../MetadataRow';

const VerticalNewsItem = (props) => {
    const navigation = useNavigation();
    return (
      <View
        style={{...commonStyles.container, paddingBottom: 10 }}>
          <TouchableOpacity
            activeOpacity={constants.CLICK_OPACITY}
            onPress={() => navigation.navigate("WebViewScreen", { uri: props.article.url })}>
              <Image
                style={styles.newsImage}
                source={{ uri: props.article.urlToImage }}/>
              <View style={styles.newsTextContainer}>
                <MetadataRow
                  article={props.article}
                  openModal={props.openModal} />
                <Text
                  style={{...commonStyles.newsHeadingText, ...commonStyles.commonText, marginBottom: 5, padding: 2 }}
                  numberOfLines={constants.NEWS_ITEM_LINES_LIMIT}>
                  {props.article.title}
                </Text>
              </View>
          </TouchableOpacity>
      </View>
    );
}

export default VerticalNewsItem;
