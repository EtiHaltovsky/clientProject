import React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import Img from './assets/propfil.png';
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={Img} style={styles.image} />
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>שם משתמש:</Text>
          <TextInput style={styles.input} placeholder="שם משתמש" />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>סיסמא:</Text>
          <TextInput style={styles.input} placeholder="סיסמא" secureTextEntry={true} />
        </View>
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
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  inputContainer: {
    borderWidth: 2,
    borderColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 5,
  },
});

export default LoginScreen;