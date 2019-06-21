
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
              <View style={styles.contentTitle}>
                <Text onPress={() => this.props.navigation.navigate('ResourceScreen')} style={styles.homeFont}>What is Prayer?</Text>
              </View>
            </View>

            <View style={styles.category}>
                <Text onPress={() => this.props.navigation.navigate('ResourceScreen')} style={styles.categoryFont}>Sermon</Text>
              </View>
          </View>

          <View style={styles.sermonFeedContainer}>
            <View style={styles.sermonFeed}>
              <View style={styles.contentTitle}>
                <Text onPress={() => this.props.navigation.navigate('ResourceScreen')} style={styles.homeFont}>Blah Blah Blah</Text>
              </View>
            </View>
          </View>

          <View style={styles.sermonFeedContainer}>
            <View style={styles.sermonFeed}>
              <View style={styles.contentTitle}>
                <Text onPress={() => this.props.navigation.navigate('ResourceScreen')} style={styles.homeFont}>LaLa Land</Text>
              </View>
            </View>
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
    paddingRight: 20,
    paddingTop: 15,
    alignItems: 'flex-end',
    width: '100%',
    // justifyContent: 'center'
  },
  feed: {
    fontSize: 50,
    paddingLeft: 25,
    color: 'black',
  },
  sermonFeedContainer: {
    paddingTop: 15,
    alignItems: 'center',
  },
  sermonFeed: {
    // flex: 1, 
    height: 125,
    width: '90%',
    backgroundColor: 'steelblue',
    alignItems: 'center',
    paddingBottom: 10,
    // paddingLeft: 25,
    borderRadius: 15,
  },
  homeFont: {
    fontSize: 25,
    alignItems: 'center',
    color: 'white',
  },
  categoryFont: {
    color: 'black',
  }

});


