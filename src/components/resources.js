import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Header from './header';
import Footer from './footer';
import PrayerWall from './prayer';
import Music from './music';
import Sermon from './sermon';
import Events from './events';

export default class Resources extends Component{
    render() {
      return (
        <View style={styles.container}>
          <Header/>
          <View style={styles.sermons}>
            <Text style={styles.frontPage}>Sermon</Text>
          </View>
          <View style={styles.events}>
            <Text style={styles.frontPage}>Events</Text>
          </View>
          <View style={styles.music}>
            <Text style={styles.frontPage}>Music</Text>
          </View>
          <View style={styles.give}>
            <Text style={styles.frontPage}>Prayer Wall</Text>
          </View>
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
  