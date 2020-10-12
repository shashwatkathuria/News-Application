import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import { constants, commonNewsItemStyles as commonStyles } from '../../../stylesheets/main';
import MetadataRow from '../MetadataRow';

const PlainNewsItem = (props) => {
    const navigation = useNavigation();

    return (
      <View style={{...commonStyles.container, padding: 10 }}>
          <TouchableOpacity
            activeOpacity={constants.CLICK_OPACITY}
            onPress={() => navigation.navigate("WebViewScreen", { uri: props.article.url })}>
            <View style={{ flex: 1 }}>
              <MetadataRow
                article={props.article}
                openModal={props.openModal}/>
              <Text
                style={{...commonStyles.newsHeadingText, ...commonStyles.commonText, marginBottom: 10, padding: 2 }}
                numberOfLines={3}>
                { props.article.title }
              </Text>
            </View>
          </TouchableOpacity>
      </View>
    );
}

export default PlainNewsItem;
