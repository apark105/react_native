import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';


export default class Header extends Component{
  render() {
    return (
      <View style={styles.header}>
          <Image style={styles.wjbc} source={require('../assets/images/wjbc.png')} />
          {/* <Text style={styles.title}>WJBC</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 150,
    // backgroundColor: '#F5FCFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    // paddingBottom: 5,
  },
  wjbc: {
      height: '45%',
      width: '50%',
  },
  title: {
    fontSize: 50,
  },
});
