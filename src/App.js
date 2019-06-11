/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/home';
import SermonScreen from './components/sermon';
import EventScreen from './components/events';


import { createAppContainer, createStackNavigator } from 'react-navigation'; 

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });



const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Sermons: {
      screen: SermonScreen,
    },
    Events: {
      screen: EventScreen,
    },
    // Give: {
    //   screen: GiveScreen,
    // }
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component<Props> {
  render() {
    return (
        <AppContainer/>
    );
  }
}

const styles = StyleSheet.create({
  route: {
    shadowRadius: 0,
    shadowColor: 'transparent',
    shadowOffset: {
      height: 0,
    },
    backgroundColor: 'black'
  },
});
