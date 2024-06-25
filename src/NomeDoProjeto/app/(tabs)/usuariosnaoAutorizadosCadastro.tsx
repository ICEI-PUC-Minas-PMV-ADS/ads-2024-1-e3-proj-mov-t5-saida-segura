import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Alert, SectionListComponent } from 'react-native';
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

export default function usuariosnaoAutorizadosCadastro() {
  const [nomeResposavel, setnomeResposavel] = useState('');
  const [telefone, setTelefone] = useState('');
  const [grauParentesco, setGrauParentesco] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [motivoNAutorizado, setMotivoNAutorizado] = useState('');
  const [autorizado, setAutorizado] = useState('Não');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleCadastro = () => {
    fetch(config.URL+'/Responsaveis', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nomeResposavel, telefone, grauParentesco, dataNascimento, cpf, tipoDocumento, motivoNAutorizado, autorizado })
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
      <Text style={styles.title}>Cadastro:</Text>
      
      <TextInput
      placeholder='Nome da pessoa não autorizada:'
        style={styles.input}
        value={nomeResposavel}
        onChangeText={setnomeResposavel}
      />
     
      <TextInput
      placeholder='Telefone(não obrigatório):'
        style={styles.input}
        value={telefone}
        onChangeText={setTelefone}
      />
      
      <TextInput
      placeholder='Grau de parentesco:'
        style={styles.input}
        value={grauParentesco}
        onChangeText={setGrauParentesco}
      />
      <TextInput
      placeholder='Data de nascimento(não obrigatório):'
        style={styles.input}
        value={dataNascimento}
        onChangeText={setDataNascimento}
      />
      <TextInput
      placeholder='CPF (não obrigatório):'
        style={styles.input}
        value={cpf}
        onChangeText={setCpf}
      />
     
      <TextInput
      placeholder='Motivo da não autorização:'
        style={styles.input}

        value={motivoNAutorizado}
        onChangeText={setMotivoNAutorizado}
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
    
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 250,
  },
  label: {
    color: '#000000',
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
   
  },
  input: {
    backgroundColor: '#dfeee6',
    width: '100%',
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#5caa80',
    width: '50%',
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
