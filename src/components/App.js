import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewsFeedScreen from './screens/NewsFeedScreen';
import WebViewScreen from './screens/WebViewScreen';
import SavedNewsScreen from './screens/SavedNewsScreen';
import LoadingSpinner from './common/LoadingSpinner';
import { constants } from '../stylesheets/main';

const Stack = createStackNavigator();

export default App = (props) => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={constants.THEME}/>
      <Stack.Navigator initialRouteName='NewsFeedScreen'>
        <Stack.Screen name='NewsFeedScreen' component={NewsFeedScreen}/>
        <Stack.Screen name='WebViewScreen' options={{ title: 'WebViewScreen' }}>
          {props => <WebViewScreen {...props} uri={props.uri} />}
        </Stack.Screen>
        <Stack.Screen name='SavedNewsScreen' component={SavedNewsScreen} options={{ title: 'SavedNewsScreen' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
