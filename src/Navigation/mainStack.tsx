import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ArticleDetails from '../screens/ArticalDetails/ArticleDetails';
import screenNames from './screenNames';
import { ArticleType } from '../screens/typs/ArticleType';
import stackNames from './Stacks/StackNames';
import AuthStack from './Stacks/AuthStack';
import MainTap from './taps/MainTap';
import SheardStack from './Stacks/SheardStack';


const Stack = createStackNavigator<MainStackParamList>();
export default function mainStack(): React.JSX.Element {
  return (

    <Stack.Navigator
      screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name={screenNames.homescreen} component={HomeScreen} />
      <Stack.Screen name={screenNames.articleDetails} component={ArticleDetails} /> */}
      
      <Stack.Screen name={stackNames.AuthStack} component={AuthStack} />
      <Stack.Screen name={stackNames.MainTap} component={MainTap}/> 
      <Stack.Screen name={stackNames.SheardStack} component={SheardStack}/> 

    </Stack.Navigator>
  );
}

export type MainStackParamList = {
  [screenNames.HomeScreen]: undefined;
  [stackNames.AuthStack]: undefined;
  [stackNames.MainTap]: undefined;
  [screenNames.ArticleDetails]: {
    article: ArticleType;
  }
    [stackNames.SheardStack]: undefined;

};