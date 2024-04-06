import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function opcoesResposavel() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saída Segura</Text>
      <View style={styles.box}>
        <Text style={styles.boxText}>Listar Pessoas Autorizadas a Buscar</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.boxText}>Histórico de Saídas</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.boxText}>Pessoas não Autorizadas para Buscar a Criança</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  box: {
    backgroundColor: '#7BC59D',
    padding: 20,
    marginBottom: 20,
    width: '80%',
  },
  boxText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
});
