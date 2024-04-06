import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function selecionaAluno() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saída Segura</Text>
      <Text style={styles.subtitle}>Selecione um aluno:</Text>
      <View style={styles.childContainer}>
        <View style={styles.child}>
          <FontAwesome name="user" size={50} color="black" />
          <View style={styles.childInfo}>
            <Text>Nome: João da Silva</Text>
            <Text>Idade: 8 anos</Text>
            <Text>Professor: Maria Oliveira</Text>
            <Text>Turma: 3º ano A</Text>
          </View>
        </View>
        <View style={styles.child}>
          <FontAwesome name="user" size={50} color="black" />
          <View style={styles.childInfo}>
            <Text>Nome: Maria Souza</Text>
            <Text>Idade: 7 anos</Text>
            <Text>Professor: Ana Santos</Text>
            <Text>Turma: 2º ano B</Text>
          </View>
        </View>
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
  subtitle: {
    fontSize: 18,
    color: 'black',
    marginBottom: 20,
  },
  childContainer: {
    alignItems: 'center',
  },
  child: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7BC59D',
    padding: 10,
    marginBottom: 20,
    width: '110%',
  },
  childInfo: {
    marginLeft: 10,
  },
});
