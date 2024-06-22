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
      <Text style={styles.title}>Cadastro de Criança</Text>
      <Text style={styles.label}>Nome do Aluno</Text>
      <TextInput
        style={styles.input}
        value={nomeAluno}
        onChangeText={setNomeAluno}
      />
      <Text style={styles.label}>Endereço</Text>
      <TextInput
        style={styles.input}
        value={endereco}
        onChangeText={setEndereco}
      />
      <Text style={styles.label}>Responsável</Text>
      <TextInput
        style={styles.input}
        value={responsavel}
        onChangeText={setResponsavel}
      />
      <Text style={styles.label}>Professor</Text>
      <TextInput
        style={styles.input}
        value={professor}
        onChangeText={setProfessor}
      />
      <Text style={styles.label}>Matrícula</Text>
      <TextInput
        style={styles.input}
        value={matricula}
        onChangeText={setMatricula}
      />
      <Text style={styles.label}>Idade do Aluno</Text>
      <TextInput
        style={styles.input}
        value={idadeAluno}
        onChangeText={setIdadeAluno}
      />
      <Text style={styles.label}>Série do Aluno</Text>
      <TextInput
        style={styles.input}
        value={serieAluno}
        onChangeText={setSerieAluno}
      />
      <Text style={styles.label}>Sala do Aluno</Text>
      <TextInput
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
});
