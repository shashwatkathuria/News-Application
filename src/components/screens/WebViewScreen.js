import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import LoadingSpinner from '../common/LoadingSpinner';
import { constants, webViewScreenStyles as styles } from '../../stylesheets/main';

export default class WebViewScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      title: 'Web',
      headerStyle: styles.headerStyle,
      headerTintColor: constants.STANDARD_LIGHT
    });
  }

  render() {
    return (
      <View style= {{ flex: 1 }}>
        {!this.state.isLoaded && (
          <View style={{ flex: 0.1 }}>
             <LoadingSpinner />
          </View>
        )}
        <WebView
          onLoadStart={() => this.setState({ isLoaded: false })}
          onLoadEnd={() => this.setState({ isLoaded: true })}
          source={{ uri: this.props.route.params.uri }}
        />
      </View>
    );
  }
}
