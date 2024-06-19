import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import telaLogin from './(tabs)/telaLogin';
import TabOneScreen from './(tabs)/index';
import selecionaAluno from './(tabs)/selecionaAluno';
import telaCadastro from './(tabs)/cadastro';
import pessoasAutorizadas from './(tabs)/pessoasAutorizadas';
import opcoesResposavel from './(tabs)/opcoesResponsavel';
import cadastrarCrianca from './(tabs)/cadastrarCrianca';
import listarCriancas from './(tabs)/listarCriancas';

type RootStackParamList = {
  telaLogin: undefined;
  index: undefined;
  selecionaAluno: { userId: number };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootLayout() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="telaLogin" component={telaLogin} options={{ title: 'Login' }} />
        <Stack.Screen name="index" component={TabOneScreen} options={{ title: 'Alunos' }} />
        <Stack.Screen name="opcoesResponsavel" component={opcoesResposavel} options={{ title: 'opcoesResponsavel' }} />
        <Stack.Screen name="telaCadastro" component={telaCadastro} options={{ title: 'telaCadastro' }} />
        <Stack.Screen name="cadastrarCrianca" component={cadastrarCrianca} options={{ title: 'cadastrarCrianca' }} />
        <Stack.Screen name="listarCriancas" component={listarCriancas} options={{ title: 'listarCriancas' }} />
        <Stack.Screen name="selecionaAluno" component={selecionaAluno} options={{ headerShown: false }} initialParams={{ userId: 0 }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
