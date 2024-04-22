import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

interface Aluno {
  id: number;
  nome: string;
  data_Nasc: string; // Alterado para string
}
interface RouteParams {
  userId: string;
}
export default function selecionaAluno() {
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const route = useRoute();
  const { userId } = route.params as RouteParams;

  useEffect(() => {
    fetch(`https://localhost:7110/Alunos/responsavel/${userId}`)
      .then(response => response.json())
      .then(data => setAlunos(data));
  }, []);
  const formatarData = (dataString: string) => {
    const data = new Date(dataString);
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saída Segura</Text>
      <Text style={styles.subtitle}>Selecione um aluno:</Text>
      <View style={styles.childContainer}>
        {alunos.map(aluno => (
          <View key={aluno.id} style={styles.child}>
            <FontAwesome name="user" size={50} color="black" />
            <View style={styles.childInfo}>
              <Text>Nome: {aluno.nome}</Text>
              <Text>Nascimento: {formatarData(aluno.data_Nasc)}</Text>
            </View>
          </View>
        ))}
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