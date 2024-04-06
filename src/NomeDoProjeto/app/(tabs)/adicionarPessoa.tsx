import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function adicionarPessoa() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="user" size={132} color="black" />
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.input} />
        <Text style={styles.label}>Data de Nascimento</Text>
        <TextInput style={styles.input} />
        <Text style={styles.label}>RG</Text>
        <TextInput style={styles.input} />
        <Text style={styles.label}>CPF</Text>
        <TextInput style={styles.input} />
        <Text style={styles.label}>Grau de Parentesco</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
  },
  form: {
    marginTop: 20,
  },
  label: {
    color: 'black',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#7BC59D',
    color: 'black',
    fontSize: 16,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#7BC59D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
});
