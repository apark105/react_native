import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button } from 'react-native';

const tabIcon = {
      Home: require('./assets/images/home.png'),
      Resources: require('./assets/images/play.png'),
      Give: require('./assets/images/heart.png'),
      Events: require('./assets/images/calendar.png'),
      Profile: require('./assets/images/account.png')
      
  };

const Icon = ({ name, color, style, ...props }) => {
    const icon = tabIcon[name];
  
    return <Image style={styles.img} source={icon} />
  };
  
  export default Icon;


  const styles = StyleSheet.create({
    img: {
      height: 26,
      width: 26,
      // color: 'blue',
    }

  })
  

