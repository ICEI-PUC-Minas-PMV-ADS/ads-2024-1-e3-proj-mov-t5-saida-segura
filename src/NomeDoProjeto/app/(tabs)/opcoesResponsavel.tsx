import React from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Alert,  TouchableNativeFeedback, StatusBar } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
//import { Text, TouchableRipple } from 'react-native-paper';


export default function opcoesResposavel() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saída Segura</Text>
      <Pressable style={styles.box} onPress={() => navigation.navigate('cadastrarCrianca')}><Text style={styles.boxText}>Cadastrar criança</Text> </Pressable>
      <Pressable style={styles.box} onPress={() => navigation.navigate('listarCriancas')}><Text style={styles.boxText}>Listar Crianças</Text></Pressable>
      <Pressable style={styles.box} onPress={() => navigation.navigate('exibirHistorico')}><Text style={styles.boxText}>Exibir Histórico</Text></Pressable>
      <Pressable style={styles.box} onPress={() => navigation.navigate('usuariosAutorizadosCadastro')}><Text style={styles.boxText}>Cadastro pessoas autorizadas</Text></Pressable>
      <Pressable style={styles.box} onPress={() => navigation.navigate('usuariosnaoAutorizadosCadastro')}><Text style={styles.boxText}>Cadastro pessoas não autorizadas</Text></Pressable>
     
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundImage: 'url("assets/saidasegura1.png")',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.8,
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    top:-90,
  },
  box: {
    backgroundColor: '#dfeee6',
    padding: 20,
    marginBottom: 20,
    width: '80%',
    borderRadius:10,
  },
  boxText: {
    fontSize: 12,
    color: '#051c15',
    textAlign: 'center',
    fontWeight: 'bold',
   
  },
});
