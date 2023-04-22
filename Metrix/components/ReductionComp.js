import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Text } from 'react-native-elements';
import { Button, Container, NativeBaseProvider, ScrollView } from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';
import {ImageBackground, useWindowDimensions} from 'react-native';
import { Linking } from 'react-native';
import MyStatusBar from './MyStatusBar';
import { TextInput } from 'react-native-gesture-handler';
import { Input } from 'native-base';
import { InputGroup } from 'native-base';
import { Alert } from 'react-native';
import { useState } from 'react';
import { color } from 'react-native-reanimated';

const ReductionComp = () => {
    
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [finalPrice, setFinalPrice] = useState('');

  const clearAndSetNum2 = (newValue) => {
    setNum2('');
    setNum2(newValue);
  };

  const reductionCalcul = () => {
    if(parseInt(num2) > 100) {
        Alert.alert("Error", "The discount can't be greater than 100%.");
        return;
    } else {
        const result = parseInt(num1) - (parseInt(num1) * parseInt(num2)) / 100;
        setFinalPrice(result);
    }
    
  };

  const styles = useStyles();

  return (
    <NativeBaseProvider>
        <View style={styles.container}>
        <MyStatusBar text="Reductions"/>
        <ScrollView contentContainerStyle={styles.scrollView}>
            <Container style={styles.formContainer}>
                <Text style={styles.btnTitle}>Original Price</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={num1}
                    maxLength={8}
                    placeholder='120'
                    returnKeyType="done"
                    onChangeText={setNum1}
                />
                
                <Text style={styles.btnTitle}>Your actual discount</Text>
                <Container style={styles.percentage}>
                    <TextInput
                        style={styles.inputPercent}
                        keyboardType="numeric"
                        value={num2}
                        maxLength={3}
                        placeholder='70'
                        returnKeyType="done"
                        onChangeText={setNum2}
                    />
                    <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>%</Text>
                </Container>

                <Container style={styles.btnActionContainer}>
                    <Text style={styles.btnTitle}>Pre-typed discounts</Text>
                    <Container style={styles.linkContainer}>
                        <Button style={styles.linkButton} onPress={() => clearAndSetNum2('15')}>
                            <Text style={styles.buttonText}>15%</Text>
                        </Button>
                        <Button style={styles.linkButton} onPress={() => clearAndSetNum2('40')}>
                            <Text style={styles.buttonText}>40%</Text>
                        </Button>
                        <Button style={styles.linkButton} onPress={() => clearAndSetNum2('60')}>
                            <Text style={styles.buttonText}>60%</Text>
                        </Button>
                        <Button style={styles.linkButton} onPress={() => clearAndSetNum2('90')}>
                            <Text style={styles.buttonText}>90%</Text>
                        </Button>
                    </Container>
                </Container>
                
                <Container style={styles.resultContainer}>
                    <Text style={styles.resultTitle}>Your final price : </Text>
                    <TextInput
                        style={styles.result}
                        value={finalPrice.toString()}
                        editable={false} 
                        maxLength={5}
                        onChangeText={setFinalPrice}
                    />
                </Container>

                <Button title="Valider" style={styles.btnValidate} onPress={reductionCalcul}><Text style={styles.btnValidateText}>Calculate</Text></Button>

            </Container>
        </ScrollView>
        </View>
    </NativeBaseProvider>

  );
};

function useStyles() {
  const {width, height} = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0D2438',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollView: {
      flex: (height > 800) ? 1 : 0,
      width: width,
      height: height,
      alignItems: 'center',
    },
    result: {
      fontWeight: 'bold',
      fontSize: height/30,
      color: 'white',
      maxWidth: 130,
    },
    percentage: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    btnActionContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: "5%"
    },
    btnTitle: {
      color: 'white',
      fontSize: height/37,
      fontWeight: 'bold',
    },
    resultTitle: {
      fontSize: height/30,
      color: 'white',
      fontWeight: 'bold',
    },
    inputOriginalPrice: {
      alignItems: 'center',
    },
    resultContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: "5%",
    },
    linkContainer: {
      marginTop: 5,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    btnValidate: {
      marginTop: height/20,
      borderRadius: 40,
      backgroundColor: '#1E3851',
    },
    btnValidateText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: height/30,
      margin: 5
    },
    input: {
      height: height/12,
      fontSize: height/30,
      margin: 12,
      backgroundColor: '#376895',
      textAlign: 'center',
      borderColor: 'grey',
      padding: height/60,
      color: 'white',
      fontWeight: 'bold',
      borderRadius: 40,
      width: width/2,
    },
    inputPercent: {
      height: height/15,
      fontSize: 20,
      margin: 12,
      backgroundColor: '#376895',
      borderColor: 'grey',
      color: 'white',
      padding: 10,
      fontWeight: 'bold',
      textAlign: 'center',
      borderRadius: height/30,
      width: width/4,
      },
    linkButton: {
      backgroundColor: '#1E3851',
      height: height/12,
      aspectRatio: 1,
      margin: height/120,
      borderRadius: (height/12)/2,
    },
    buttonText: {
      fontSize: height/50,
      color: 'white',
      fontWeight: 'bold',
    },
    formContainer: {
      flex: 1,
      alignContent: 'center',
      marginTop: '5%',
      alignItems: 'center',
    },

  })

  return styles;

}

export default ReductionComp;
