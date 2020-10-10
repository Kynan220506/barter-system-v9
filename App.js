import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import AppTabNavigator from './components/AppTabNavigator';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default function App() {
  return (
    <AppContainer></AppContainer>
  );
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  BottomTab:{screen: AppTabNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);