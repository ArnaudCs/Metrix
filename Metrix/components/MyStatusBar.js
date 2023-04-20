import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

const MyStatusBar = (props) => {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.textStyle}>{props.text}</Text>
        <StatusBar style="light"/>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    alignSelf: 'stretch',
    backgroundColor: '#1E3851',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  upperDeck: {
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default MyStatusBar;
