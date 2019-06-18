
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Header from './header';
import PrayerWall from './prayer';
import Music from './music';
import Sermon from './sermon';
import Events from './events';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.feedContainer}>

          <Text style={styles.feed}>Feed</Text>
          
          <View style={styles.sermonFeedContainer}>
            <View style={styles.sermonFeed}>
            </View>
          </View>
          <View style={styles.contentTitle}>
            <Text onPress={() => this.props.navigation.navigate('ResourceScreen')} style={styles.homeFont}>What is Prayer?</Text>
          </View>

          

        </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  feedContainer: {
  },
  contentTitle: {
    // backgroundColor: 'blue',
    paddingLeft: 20,
    paddingTop: 15,
  },
  feed: {
    paddingBottom: 15,
    fontSize: 50,
    paddingLeft: 25,
    color: 'black',
  },
  sermonFeedContainer: {
    alignItems: 'center',
  },
  sermonFeed: {
    // flex: 1, 
    height: 125,
    width: '90%',
    backgroundColor: 'skyblue',
    alignItems: 'center',
    paddingBottom: 10,
    // paddingLeft: 25,
    borderRadius: 15,
  },
  homeFont: {
    fontSize: 25,

  }

});


