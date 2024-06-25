import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Alert, FlatList } from 'react-native';
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

export default function exibirHistorico() {
    useEffect(() => {
        carregarHistorico()
         },[])
    const [alunos, setAlunos] = useState([]);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const carregarHistorico = () => {
    fetch(config.URL+'/HistoricoSaida', {
      method: 'GET',
    })
      .then(response => {
        if (response.status === 200) {
            //setAlunos(response.json())
            return response.json();
        } else {
          throw new Error('Usuário ou senha inválidos.');
        }
      })
      .then(data => {
        setAlunos(data);
        // Navegar para a tela de pessoas autorizadas
        //navigation.navigate('opcoesResponsavel');
      })
      .catch(error => {
        if (error instanceof Error) {
          Alert.alert('Erro', error.message);
        } else {
          Alert.alert('Erro', 'Ocorreu um erro.');
        }
      });
  };

  const handleNavigateToCadastro = () => {
    navigation.navigate('telaCadastro');
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>Nome: {item.nomeAluno}</Text>
      <Text style={styles.itemText}>Responsavel pela Liberação: {item.responsavelLiberacao}</Text>
      <Text style={styles.itemText}>Responsável pelo aluno: {item.responsavelAluno}</Text>
      <Text style={styles.itemText}>Data da saída: {item.dataSaida}</Text>
      <Text style={styles.itemText}>Hora da saída: {item.horaSaida}</Text>

    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={alunos}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a8dfc2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#123623',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    color: '#123623',
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
  itemContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
    width: '100%',
  },
  itemText: {
    fontSize: 16,
    color: 'black',
  },
});
