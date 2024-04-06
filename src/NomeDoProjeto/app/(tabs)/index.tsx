import { StyleSheet } from 'react-native';
import React from 'react';
import { View, Text } from 'react-native';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saída Segura</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Escola</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Porteiro</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Pais ou Responsáveis</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: '#7BC59D',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

