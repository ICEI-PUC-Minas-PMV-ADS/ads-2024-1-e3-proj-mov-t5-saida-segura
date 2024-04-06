import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function pessoasAutorizadas() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pessoas Autorizadas a Buscar</Text>
      <View style={styles.personContainer}>
        <Ionicons name="person" size={24} color="black" style={styles.icon} />
        <View style={styles.personInfo}>
          <Text style={styles.personName}>João da Silva</Text>
          <Text style={styles.personDetails}>CPF: 123.456.789-00</Text>
          <Text style={styles.personDetails}>Tipo de Identificação: Documento</Text>
        </View>
      </View>
      <View style={styles.personContainer}>
        <Ionicons name="person" size={24} color="black" style={styles.icon} />
        <View style={styles.personInfo}>
          <Text style={styles.personName}>Maria Oliveira</Text>
          <Text style={styles.personDetails}>CPF: 987.654.321-00</Text>
          <Text style={styles.personDetails}>Tipo de Identificação: QR CODE</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add-circle" size={24} color="#7BC59D" />
        <Text style={styles.addText}>Adicionar Novo Responsável</Text>
      </TouchableOpacity>
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
  personContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7BC59D',
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
  icon: {
    marginRight: 10,
  },
  personInfo: {
    flex: 1,
  },
  personName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  personDetails: {
    fontSize: 16,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  addText: {
    fontSize: 16,
    color: '#7BC59D',
    marginLeft: 5,
  },
});
