import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { constants, commonNewsItemStyles as commonStyles } from '../../stylesheets/main';
import { MoreIcon } from '../common/Icons';

const MetadataRow = (props) => {
  return (
    <View
      style={commonStyles.rowBothEnds}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text
          style={{...commonStyles.newsSourceText, ...commonStyles.commonText}}
          numberOfLines={constants.METADATA_LINES_LIMIT}>
          {props.article.source.name}
        </Text>
        <Text style={{...commonStyles.extraDataText, ...commonStyles.commonText, color: constants.THEME }}>
           {' | ' + moment(props.article.publishedAt).fromNow()}
        </Text>
      </View>
      <TouchableOpacity
        style={{ paddingLeft: 4, paddingRight: 4, paddingTop: 1, paddingBottom: 1 }}
        onPress={props.openModal}>
        <MoreIcon color={constants.THEME}/>
      </TouchableOpacity>
    </View>
  );
}

export default MetadataRow;
