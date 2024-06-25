import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Alert } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import config from './config';

type RootStackParamList = {
  telaLogin: undefined;
  index: undefined;
  selecionaAluno: { userId: number };
  pessoasAutorizadas: undefined;
  telaCadastro: undefined;
};

export default function cadastrarCrianca() {
  const [nomeAluno, setNomeAluno] = useState('');
  const [endereco, setEndereco] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const [professor, setProfessor] = useState('');
  const [matricula, setMatricula] = useState('');
  const [idadeAluno, setIdadeAluno] = useState('');
  const [serieAluno, setSerieAluno] = useState('');
  const [salaAluno, setSalaAluno] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList, 'selecionaAluno'>>();

  const handleCadastro = () => {
    fetch(config.URL+'/Matricula', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nomeAluno, endereco, responsavel, professor, matricula, idadeAluno, serieAluno, salaAluno })
    })
    .then(response => {
      if (response.status === 200) {
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso');
        navigation.navigate('opcoesResponsavel');
      } else {
        throw new Error('Falha no cadastro. Verifique os dados e tente novamente.');
      }
    })
    .catch(error => {
      if (error instanceof Error) {
        Alert.alert('Erro', error.message);
      } else {
        Alert.alert('Erro', 'Ocorreu um erro.');
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro do Aluno</Text>
     
      <TextInput
      placeholder='Nome do Aluno:'
        style={styles.input}
        value={nomeAluno}
        onChangeText={setNomeAluno}
      />
      
      <TextInput
       placeholder='Endereço:'
        style={styles.input}
        value={endereco}
        onChangeText={setEndereco}
      />
     
      <TextInput
       placeholder='Responsável:'
        style={styles.input}
        value={responsavel}
        onChangeText={setResponsavel}
      />
    
      <TextInput
       placeholder='Professor:'
        style={styles.input}
        value={professor}
        onChangeText={setProfessor}
      />
     
      <TextInput
       placeholder='Mátricula:'
        style={styles.input}
        value={matricula}
        onChangeText={setMatricula}
      />
     
      <TextInput
       placeholder='Idade do Aluno:'
        style={styles.input}
        value={idadeAluno}
        onChangeText={setIdadeAluno}
      />
      
      <TextInput
       placeholder='Série do Aluno:'
        style={styles.input}
        value={serieAluno}
        onChangeText={setSerieAluno}
      />
     
      <TextInput
       placeholder='Sala do Aluno:'
        style={styles.input}
        value={salaAluno}
        onChangeText={setSalaAluno}
      />
      <Pressable style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundImage: 'url("assets/saidasegura1.png")',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.8,
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    top:-50,
  },
  label: {
    color: 'black',
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#dfeee6',
    width: '100%',
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#7BC59D',
    width: '50%',
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
});
