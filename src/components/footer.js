import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button } from 'react-native';


export default class Footer extends Component {
    render() {
        return (
            <View style={styles.footer}>
                {/* <Text style={styles.title}>Footer</Text> */}
                <View  style={styles.clicked}>
                    <Image style={styles.home} source={require('../assets/images/home.png')} />
                </View>
                <View>
                    <Image style={styles.play} source={require('../assets/images/play.png')} />

                </View>
                <View>
                    <Image style={styles.calendar} source={require('../assets/images/calendar.png')} />

                </View>
                <View>
                    <Image style={styles.account} source={require('../assets/images/account.png')} />

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        height: 125,
        // backgroundColor: '#F5FCFF',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        color: 'black',
        // paddingTop: 30,
    },
    clicked: {
        borderTopColor: 'black',
        // borderWidth: 2,
        borderTopWidth: 2,
        borderStyle: 'solid',
    }
});
