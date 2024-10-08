import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Text } from 'react-native-elements';
import { Button, Container, NativeBaseProvider } from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';
import {ImageBackground, useWindowDimensions } from 'react-native';
import { Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const email = 'arnaud.cossu@gmail.com'; // Votre adresse e-mail

const handlePress = () => {
  const url = `mailto:${email}`;
  Linking.openURL(url);
}

function useStyles() {
  const {width, height} = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0D2438',
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatar: {
      width: "100%",
      height: "100%",
    },
    description: {
      textAlign: 'center',
      marginTop: 60,
      fontSize: (height > 700) ? 20 : height/40,
      width: '95%',
      color: 'white',
      lineHeight: 25,
      paddingHorizontal: 20,
    },
    importantText: {
      textAlign: 'center',
      marginTop: "10%",
      fontSize: (height > 700) ? 20 : height/40,
      width: '90%',
      height: '20%',
      fontWeight: 'bold',
      color: 'white',
      lineHeight: 25,
      paddingHorizontal: 20,
    },
    linkContainer: {
      marginTop: "10%",
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1E3851',
      borderRadius: 30,
      flexDirection: 'row',
    },
    versionContainer: {
      marginTop: "10%",
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1E3851',
      borderRadius: 30,
      padding: 10,
      flexDirection: 'row',
    },
    linkButton: {
      backgroundColor: '#0D2438',
      width: width/6,
      aspectRatio: 1,
      margin: "2%",
      borderRadius: 30,
    },
    linkIcon: {
      fontSize: width/11,
    },
    frame: {
      width: width/3,
      overflow: "hidden",
      aspectRatio: 1,
      backgroundColor: 'white',
      borderRadius: (width/3)/2,
    },
    supframe: {
      backgroundColor: 'white',
      borderRadius: (width/3 + (width/40)*2 )/2,
      padding: width/40,
    }
    });

    return styles;
}

const AboutComp = () => {

  const styles = useStyles();

  // Calcul de la taille de la police en fonction de la largeur de l'écran
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Container style={styles.supframe}>
          <Container style={styles.frame}>
            <Avatar
              rounded
              source={require('../assets/profil.jpeg')}
              containerStyle={styles.avatar}
            />
          </Container>
        </Container>
        
        <Text style={styles.description}>
        Hi, I'm <Text style={styles.importantText}>Arnaud C.</Text> I'm a software engineer student at the University of Montpellier. I'm learning computer 
        science and I'm passionate about programming. Currently, 
        I am working on a project called <Text style={styles.importantText}>ToolBx</Text>. It is a mobile application that provides useful tools for work. 
        I hope you will enjoy it.
        </Text>

        <Container style={styles.linkContainer}>
          <Button style={styles.linkButton}onPress={() => Linking.openURL('https://github.com/ArnaudCs')}>
            <Icon name="logo-github" color="white" style={styles.linkIcon}/>
          </Button>
          <Button style={styles.linkButton} onPress={() => Linking.openURL('https://www.linkedin.com/in/arnaud-c-65357215a/')}>
            <Icon name="logo-linkedin" color="white" style={styles.linkIcon}/> 
          </Button>
          <Button style={styles.linkButton} onPress={handlePress}>
            <Icon name="at-circle-outline" color="white" style={styles.linkIcon}/>  
          </Button>
          <Button style={styles.linkButton} onPress={() => Linking.openURL('https://arnaudcs.github.io/')}>
            <Icon name="planet" color="white" style={styles.linkIcon}/>
          </Button>
        </Container>

        <Container style={styles.versionContainer}>
          <Text style={{color: 'white'}}>Version 1.0.2</Text>
        </Container>
      </View>
    </NativeBaseProvider>
  );
};


export default AboutComp;
