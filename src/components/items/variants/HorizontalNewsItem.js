import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import { commonNewsItemStyles as commonStyles, rowTextImageNewsItemStyles as styles } from '../../../stylesheets/main';
import MetadataRow from '../MetadataRow';

const HorizontalNewsItem = (props) => {
    const navigation = useNavigation();

    return (
      <View style={ {...commonStyles.container, padding: 10 }}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("WebViewScreen", { uri: props.article.url })}>
          <MetadataRow
            article={props.article}
            openModal={props.openModal}/>
          <View style={commonStyles.rowBothEnds}>
            <View style={{ flex: 1, padding: 2 }}>
              <Text
                style={{...commonStyles.newsHeadingText, ...commonStyles.commonText}}
                numberOfLines={5}>
                {props.article.title}
              </Text>
            </View>
            <Image
              style={styles.newsImage}
              source={{ uri: props.article.urlToImage }}/>
          </View>
        </TouchableOpacity>
      </View>
    );
}

export default HorizontalNewsItem;
