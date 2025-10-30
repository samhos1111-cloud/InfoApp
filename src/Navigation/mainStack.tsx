import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ArticleDetails from '../screens/ArticalDetails/ArticleDetails';
import screenNames from './screenNames';
import { ArticleType } from '../screens/typs/ArticleType';


const Stack = createStackNavigator<MainStackParamList>();
export default function mainStack(): React.JSX.Element {
  return (

    <Stack.Navigator
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={screenNames.homescreen} component={HomeScreen} />
      <Stack.Screen name={screenNames.articleDetails} component={ArticleDetails} />
    </Stack.Navigator>
  );
}

export type MainStackParamList = {
  [screenNames.homescreen]: undefined;
  [screenNames.articleDetails]: {
    article: ArticleType;
  }
};