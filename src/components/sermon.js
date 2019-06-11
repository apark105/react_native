/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Footer from './footer';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });


export default class SermonScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sermons}>
          <Text style={styles.frontPage}>Sermon</Text>
        </View>
        <View style={styles.sermons}>
          <Text  onPress={() => this.props.navigation.navigate('Home')} style={styles.frontPage}>Go Home</Text>
        </View>
        <Footer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  frontPage: {
    fontSize: 50,
    color: 'white',
  },
  sermons: {
    flex: 1, 
    backgroundColor: 'powderblue',
    display: 'flex', 
    justifyContent: 'flex-end', 
    alignItems: 'flex-start',
    paddingBottom: 10,
    paddingLeft: 25,

  },
  events: {
    flex: 1, 
    backgroundColor: 'skyblue',
    display: 'flex', 
    justifyContent: 'flex-end', 
    alignItems: 'flex-start',
    paddingBottom: 10,
    paddingLeft: 25,
  },
  music: {
    flex: 1, 
    backgroundColor: 'steelblue',
    display: 'flex', 
    justifyContent: 'flex-end', 
    alignItems: 'flex-start',
    paddingBottom: 10,
    paddingLeft: 25,
  },
  give: {
    flex: 1, 
    backgroundColor: 'dodgerblue',
    display: 'flex', 
    justifyContent: 'flex-end', 
    alignItems: 'flex-start',
    paddingBottom: 10,
    paddingLeft: 25,
  },
});
