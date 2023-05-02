
import {React,useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Connect from './Connect'
import { useNavigation } from '@react-navigation/native';


const FirstComponent = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('SecondComponent');
  };

  return (
    <View>
      <Text>קומפוננטה ראשונה</Text>
      <Button title="לקומפוננטה השנייה" onPress={handlePress} />
    </View>

);
  }



const ConnectingForVolunteers = () => {

  const[activeButton,setActiveButton]=useState(null);
    function handleButtonClick(buttonName){
     setActiveButton(buttonName);
   }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>מתחברים למתנדבים</Text>
      </View>

      {/* <Button title="לקומפוננטה השנייה" onPress={handlePress} /> */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.leftButton]} onPress={() => handleButtonClick('create')}>
          <Text style={[styles.buttonText, styles.leftButtonText]}>יצירת חשבון</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.rightButton]}  onPress={() => handleButtonClick('connection')}>
          <Text style={[styles.buttonText, styles.rightButtonText]}>התחבר</Text>
        </TouchableOpacity>
        {activeButton === 'connection' && <Connect />}
        {activeButton === 'create' && <Create />}

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  leftButton: {
    backgroundColor: '#32CD32',
    borderWidth: 2,
    borderColor: '#32CD32',
  },
  leftButtonText: {
    color: '#F FFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rightButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#FF0000',
  },
  rightButtonText: {
    color: '#FF0000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ConnectingForVolunteers;


