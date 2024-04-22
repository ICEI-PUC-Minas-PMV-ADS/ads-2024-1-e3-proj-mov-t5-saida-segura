import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import telaLogin from './(tabs)/telaLogin';
import TabOneScreen from './(tabs)/index';
import selecionaAluno from './(tabs)/selecionaAluno';

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
        <Stack.Screen name="selecionaAluno" component={selecionaAluno} options={{ headerShown: false }} initialParams={{ userId: 0 }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
