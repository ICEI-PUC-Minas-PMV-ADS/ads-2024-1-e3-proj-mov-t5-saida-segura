import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Alert } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  telaLogin: undefined;
  index: undefined;
  selecionaAluno: { userId: number };
};

export default function telaLogin() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList, 'selecionaAluno'>>();

  const handleLogin = () => {
    fetch('https://localhost:7110/Usuario/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ cpf: usuario, senha })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Usuário ou senha inválidos.');
      }
      return response.json();
    })
    .then(data => {
      // Navegar para a tela de selecionar aluno com o id do usuário logado
      navigation.navigate('selecionaAluno', { userId: Number(data.id) });
    }).catch(error => {
      if (error instanceof Error) {
        Alert.alert('Erro', error.message);
      } else {
        Alert.alert('Erro', 'Ocorreu um erro.');
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saída Segura</Text>
      <Text style={styles.label}>Usuário</Text>
      <TextInput
        style={styles.input}
        value={usuario}
        onChangeText={setUsuario}
      />
      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
      />
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
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
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    color: 'black',
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    backgroundColor: '#7BC59D',
    width: '100%',
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#7BC59D',
    width: '100%',
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: 'black',
    fontSize: 15,
    marginTop: 20,
  },
});