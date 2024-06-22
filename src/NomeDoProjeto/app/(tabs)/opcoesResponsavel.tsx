import React from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Alert } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


export default function opcoesResposavel() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saída Segura</Text>
      <Pressable style={styles.box} onPress={() => navigation.navigate('cadastrarCrianca')}>
        <Text style={styles.boxText}>Cadastrar criança</Text>
      </Pressable>
      <Pressable style={styles.box} onPress={() => navigation.navigate('listarCriancas')}>
        <Text style={styles.boxText}>Listar Crianças</Text>
      </Pressable>
      <Pressable style={styles.box} onPress={() => navigation.navigate('exibirHistorico')}>
        <Text style={styles.boxText}>Exibir Histórico</Text>
      </Pressable>
     
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
