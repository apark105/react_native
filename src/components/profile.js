import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native';
import Header from './header';
import Footer from './footer';
import PrayerWall from './prayer';
import Music from './music';
import Events from './events';

export default class Profile extends Component{
    render() {
      return (
        <View style={styles.container}>
          <Header/>
          <View style={styles.music}>
            <Text style={styles.frontPage}>Profile</Text>
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
  

