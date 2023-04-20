import React from 'react';
import { View, StyleSheet, TouchableOpacity, Platform, Pressable, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Avatar, Divider, Text } from 'react-native-elements';
import { Button, Container, Modal, NativeBaseProvider } from "native-base";
import MyStatusBar from './MyStatusBar';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const ReductionComp = () => {
    
  const [totalPrice, setTotalPrice] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [realStartDate, setRealStartDate] = useState('');
  const [realEndDate, setRealEndDate] = useState('');
  const [finalProPrice, setFinalProPrice] = useState('');

  const addDateSeparator = (input, separator) => {
    input = input.replace(/[^\d]/g, "");
    let date = "";
    for (let i = 0; i < input.length; i++) {
      if (i === 4 || i === 6) {
        date += separator;
      }
      date += input[i];
    }
    return date;
  };

  prorataCalcul = () => {
    if (!totalPrice || !realStartDate || !realEndDate || !startDate || !endDate) {
      alert('Please fill in all the fields');
      return;
    }
    // Convertir les dates en objets Date
    const realStartDateObj = new Date(realStartDate);
    const realEndDateObj = new Date(realEndDate);
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);

    // Vérifier que les dates sont valides
    if (isNaN(realStartDateObj) || isNaN(realEndDateObj) || isNaN(startDateObj) || isNaN(endDateObj)) {
      alert('Invalid date format');
      return;
    }
    // Vérifier que les dates sont dans le bon ordre
    if (realStartDateObj > realEndDateObj || startDateObj > endDateObj) {
      alert('Invalid date range');
      return;
    }

    // Vérifier que les dates sont réelles
    if (realStartDateObj.getDate() != parseInt(realStartDate.split('-')[2])
        || realEndDateObj.getDate() != parseInt(realEndDate.split('-')[2])
        || startDateObj.getDate() != parseInt(startDate.split('-')[2])
        || endDateObj.getDate() != parseInt(endDate.split('-')[2])) {
      alert('Invalid date');
      return;
    }

    if (startDateObj < realStartDateObj) {
      alert('Start date is before real start date');
      return;
    }
    
    if (endDateObj > realEndDateObj) {
      alert('End date is after real end date');
      return;
    }

    // Calculer le nombre de jours de la période initiale et de la période réelle
    const initialDays = Math.ceil((realEndDateObj - realStartDateObj) / (1000 * 60 * 60 * 24));
    const realDays = Math.ceil((endDateObj - startDateObj) / (1000 * 60 * 60 * 24));
    // Calculer le prorata
    const prorata = (totalPrice / initialDays) * realDays;
    // Afficher le résultat avec deux décimales
    setFinalProPrice(prorata.toFixed(2));
  }


  return (
    <NativeBaseProvider>
        <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={false} keyboardShouldPersistTaps="handled" contentContainerStyle={styles.container}>
        <MyStatusBar text="Prorata"></MyStatusBar>
            <Container style={styles.formContainer}>
                <Container style={styles.centeredHorizontalContainer}>
                  <Text style={styles.resultTitle}>Total Price :</Text>
                  <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={totalPrice}
                    maxLength={15}
                    placeholder='12365'
                    returnKeyType="done"
                    onChangeText={setTotalPrice}
                  />
                </Container>

                <Divider thickness="2" orientation="vertical" style={styles.divider} />

                <Text style={styles.resultTitle}>Initial Period</Text>

                <Container style={styles.resultContainer}>
                  <Container style={styles.dateContainer}>
                      <Text style={styles.result}>Start Date</Text>
                      <TextInput
                          style={styles.dateInput}
                          value={realStartDate}
                          maxLength={10}
                          keyboardType='numeric'
                          placeholder="YYYY/MM/DD"
                          onChangeText={(text) => setRealStartDate(addDateSeparator(text, "-"))}
                          returnKeyType="done"
                      />
                  </Container>

                  <Container style={styles.dateContainer}>
                      <Text style={styles.result}>End Date</Text>
                      <TextInput
                          style={styles.dateInput}
                          value={realEndDate}
                          maxLength={10}
                          keyboardType='numeric'
                          placeholder="YYYY/MM/DD"
                          onChangeText={(text) => setRealEndDate(addDateSeparator(text, "-"))}
                          returnKeyType="done"
                      />
                  </Container>
                </Container>

                <Divider thickness="2" orientation="vertical" style={styles.divider} />

                <Text style={styles.resultTitle}>Real period</Text>

                <Container style={styles.resultContainer}>
                  <Container style={styles.dateContainer}>
                      <Text style={styles.result}>Start Date</Text>
                      <TextInput
                          style={styles.dateInput}
                          value={startDate}
                          maxLength={10}
                          keyboardType='numeric'
                          placeholder="YYYY/MM/DD"
                          onChangeText={(text) => setStartDate(addDateSeparator(text, "-"))}
                          returnKeyType="done"
                      />
                  </Container>

                  <Container style={styles.dateContainer}>
                      <Text style={styles.result}>End Date</Text>
                      <TextInput
                          style={styles.dateInput}
                          value={endDate}
                          maxLength={10}
                          keyboardType='numeric'
                          placeholder="YYYY/MM/DD"
                          onChangeText={(text) => setEndDate(addDateSeparator(text, "-"))}
                          returnKeyType="done"
                      />
                  </Container>
                </Container>

                <Container style={styles.centeredResultHorizontalContainer}>
                      <Text style={styles.result}>To Pay or Receive : </Text>
                      <TextInput
                        style={styles.proresult}
                        value={finalProPrice.toString()}
                        editable={false} 
                        maxLength={5}
                        onChangeText={setFinalProPrice}
                      />
                  </Container>

                <Container style={styles.centeredVerticalContainer}>
                  <Button title="Valider" style={styles.btnValidate} onPress={prorataCalcul}><Text style={styles.btnValidateText}>Calculate</Text></Button>
                </Container>

              </Container>
        </KeyboardAwareScrollView >
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
  divider: {
    marginBottom: 20,
    marginTop: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0D2438',
  },
  centeredVerticalContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 30,
  },
  centeredHorizontalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  centeredResultHorizontalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    flexDirection: 'row',
  },
  result: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  dateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    width: '100%',
  },
  chooseBtn: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnActionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  btnTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  resultTitle: {
    fontSize: 25,
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
    marginTop: '2%',
  },
  btnValidate: {
    marginTop: '10%',
    borderRadius: 40,
    backgroundColor: '#1E3851',
  },
  btnDateText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 10,
  },
  btnValidateText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    margin: 10,
  },
  proresult: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
    maxWidth: 130,
  },
  input: {
    height: 50,
    fontSize: 20,
    backgroundColor: '#376895',
    textAlign: 'center',
    borderColor: 'grey',
    marginLeft: 10,
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 40,
    width: 150,
  },
  dateInput: {
    height: 50,
    fontSize: 18,
    margin: 12,
    backgroundColor: '#376895',
    textAlign: 'center',
    borderColor: 'grey',
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 40,
    width: 160,
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 1,
    alignContent: 'center',
    marginTop: '5%',
    alignItems: 'center',
  },

});

export default ReductionComp;
