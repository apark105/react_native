
import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
// import Header from './components/header';
// import Footer from './components/footer';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
// import PrayerWall from './components/prayer';
// import Music from './components/music';
// import Sermon from './components/sermon';
import Events from './components/events';
import Give from './components/give';
import Home from './components/home';
import Resources from './components/resources';
import Profile from './components/profile';

import Icon from './tab-icons';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });



const RootStack = createStackNavigator(
  {
    HomeScreen: {
      screen: Home,
    },
    ResourceScreen: {
      screen: Resources,
    },
  },
  {
    initialRouteName: 'HomeScreen',
  }
);

// export default createAppContainer(
//   createBottomTabNavigator(
//     {
//       HomeScreen: {
//         screen: Home,
//       },
//       ResourceScreen: {
//         screen: Resources,
//       },
//     },
//     {
//       defaultNavigationOptions: ({ navigation }) => ({
//         tabBarIcon: ({ focused, tintColor }) =>
//           getTabBarIcon(navigation, focused, tintColor),
//       }),
//       tabBarOptions: {
//         activeTintColor: 'tomato',
//         inactiveTintColor: 'gray',
//       },
//     }
//   )
// );

const AppContainer = createAppContainer(createBottomTabNavigator(
      {
        Home: {
          screen: Home,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="Home" />
          }
        },
        Resources: {
          screen: Resources,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="Resources" />
          }
        },
        Give: {
          screen: Give,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="Give" />
          }
        },  
        Events: {
          screen: Events,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="Events" />
          }
        },
        Profile: {
          screen: Profile,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="Profile" />
          }
        },
      },
      // {
      //   defaultNavigationOptions: ({ navigation }) => ({
      //     tabBarIcon: ({ focused, tintColor }) =>
      //       getTabBarIcon(navigation, focused, tintColor),
      //   }),
      //   tabBarOptions: {
      //     activeTintColor: 'tomato',
      //     inactiveTintColor: 'gray',
      //   },
      // }
    ));

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

