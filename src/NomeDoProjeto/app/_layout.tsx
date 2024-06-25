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
import exibirHistorico from './(tabs)/exibirHistorico';
import usuariosnaoAutorizadosCadastro from './(tabs)/usuariosnaoAutorizadosCadastro';
import usuariosAutorizadosCadastro from './(tabs)/usuariosAutorizadosCadastro';

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
        <Stack.Screen name="opcoesResponsavel" component={opcoesResposavel} options={{ title: 'Menu' }} />
        <Stack.Screen name="telaCadastro" component={telaCadastro} options={{ title: 'Tela de Cadastro' }} />
        <Stack.Screen name="cadastrarCrianca" component={cadastrarCrianca} options={{ title: 'Cadastrar Criança' }} />
        <Stack.Screen name="listarCriancas" component={listarCriancas} options={{ title: 'Listar Crianças' }} />
        <Stack.Screen name="selecionaAluno" component={selecionaAluno} options={{ headerShown: false }} initialParams={{ userId: 0 }} />
        <Stack.Screen name="exibirHistorico" component={exibirHistorico} options={{ title: 'Exibir Histórico' }} />
        <Stack.Screen name="usuariosnaoAutorizadosCadastro" component={usuariosnaoAutorizadosCadastro} options={{ title: 'Cadastro de pessoas não autorizadas ' }} />
        <Stack.Screen name="usuariosAutorizadosCadastro" component={usuariosAutorizadosCadastro} options={{ title: 'Cadastro de pessoas autorizadas ' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
