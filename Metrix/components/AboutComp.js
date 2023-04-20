import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Text } from 'react-native-elements';
import { Button, Container, NativeBaseProvider } from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';
import {ImageBackground} from 'react-native';
import { Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const email = 'arnaud.cossu@gmail.com'; // Votre adresse e-mail

const handlePress = () => {
  const url = `mailto:${email}`;
  Linking.openURL(url);
}


const AboutComp = () => {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Container style={styles.frame}>
          <Avatar
            rounded
            size="xlarge"
            source={require('../assets/profil.png')}
            containerStyle={styles.avatar}
          />
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
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D2438',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  description: {
    textAlign: 'center',
    marginTop: 60,
    fontSize: 20,
    width: '90%',
    color: 'white',
    lineHeight: 25,
    paddingHorizontal: 20,
  },
  importantText: {
      textAlign: 'center',
      marginTop: 60,
      fontSize: 20,
      width: '90%',
      fontWeight: 'bold',
      color: 'white',
      lineHeight: 25,
      paddingHorizontal: 20,
  },
  linkContainer: {
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E3851',
    borderRadius: 30,
    flexDirection: 'row',
  },
  linkButton: {
    backgroundColor: '#0D2438',
    height: 60,
    width: 60,
    margin: 10,
    borderRadius: 30,
  },
  linkIcon: {
    fontSize: 35,
  },
  frame: {
    backgroundColor: 'white',
    borderRadius: 100,
    marginTop: 10,
  }
});

export default AboutComp;
