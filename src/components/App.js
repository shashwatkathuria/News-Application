import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
enableScreens();
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsFeedScreen from './screens/NewsFeedScreen';
import WebViewScreen from './screens/WebViewScreen';
import SavedNewsScreen from './screens/SavedNewsScreen';
import { constants } from '../stylesheets/main';

const Stack = createNativeStackNavigator();

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
