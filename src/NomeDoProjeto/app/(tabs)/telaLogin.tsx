import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Alert, Modal} from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import config from './config';

type RootStackParamList = {
  telaLogin: undefined;
  index: undefined;
  selecionaAluno: { userId: number };
  pessoasAutorizadas: undefined;
  telaCadastro: undefined; // Adicione esta linha para o novo screen
};

export default function telaLogin() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [modalVisible, setModalVisible] = useState(false);
  const [emailEditar, setEmailEditar] = useState('');
  const [novaSenha, setNovaSenha] = useState('');

  const handleLogin = () => {
    console.log(email)
   if(email != '' && senha != '') {

    fetch(config.URL+'/Cadastro/{email}/{senha}?email='+email+'&senha='+senha, {
      method: 'GET',
      
    })
    .then(response => {
      if (response.status === 200) {
        navigation.navigate('opcoesResponsavel');

        return response.json();
      } else {
        throw new Error('Usuário ou senha inválidos.');
      }
    })
    .then(data => {
      // Navegar para a tela de pessoas autorizadas
      navigation.navigate('opcoesResponsavel');
    })
    .catch(error => {
      if (error instanceof Error) {
        Alert.alert('Erro', error.message);
      } else {
        Alert.alert('Erro', 'Ocorreu um erro.');
      }
    });
  }else{
    alert('Por favor digite e-mail e senha válidos!')
  }
  };

  const updateSenha=()=>{
    fetch(config.URL+'/Cadastro/{email}/{senha}?email='+emailEditar+'&senha='+novaSenha, {
      method: 'PUT',
      
    })
    .then(response => {
      if (response.status === 200) {
        navigation.navigate('telaLogin');
        setModalVisible(!modalVisible)
        return response.json();
      } else {
        throw new Error('Usuário ou senha inválidos.');
      }
    })
   
    .catch(error => {
      if (error instanceof Error) {
        Alert.alert('Erro', error.message);
      } else {
        Alert.alert('Erro', 'Ocorreu um erro.');
      }
    });
  }
  const handleNavigateToCadastro = () => {
    navigation.navigate('telaCadastro');
  };

  return (
    <View style={styles.container}>
   
      <Text style={styles.title}> SAÍDA SEGURA </Text>
      
      <TextInput
        placeholder='E-mail:'
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
     
      <TextInput
       placeholder='Senha:'
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
      />
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      
    
    <Modal style={styles.caixa} animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => { Alert.alert('Modal has been closed.'); setModalVisible(!modalVisible)}}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              placeholder='E-mail:'
              style={styles.input}
              value={emailEditar}
              onChangeText={setEmailEditar}
            
           />   
          <TextInput
            placeholder='Senha:'
            style={styles.input}
            value={novaSenha}
            onChangeText={setNovaSenha}
            secureTextEntry={true}
          />
          <Pressable style={styles.button} onPress={updateSenha}>
             <Text style={styles.textStyle}>Salvar Alterações</Text>
          </Pressable>
      
          <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Fechar</Text>
          </Pressable>
        </View>
      </View>
     </Modal>
      <Pressable style={styles.button} onPress={handleNavigateToCadastro}>
        <Text style={styles.buttonText}>Cadastre-se</Text>
      </Pressable>
      <Pressable style={styles.linkmodal} onPress={() => setModalVisible(true)}>
        <Text style={styles.linkmodal}>Esqueci minha senha!</Text>
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
  linkmodal:{
    color:'#03562f',
    fontWeight: 'bold',

  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 250,
  },
  label: {
    color: '#000000',
    marginBottom: 5,
    fontSize: 16,
     fontWeight: 'bold'
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
    backgroundColor: '#5caa80',
    width: '50%',
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 70,
  },
  forgotPassword: {
    color: '#051c15',
    fontSize: 12,
    marginTop:20,
    fontWeight: 'bold',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height:250,
  },
  
  buttonClose: {
    backgroundColor: '#c30b0b',
    top:-40,
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  caixa:{
    height:100,

  }
  
});

  // <Image source={require('./assets/saidasegura.png')} style={styles.logo} /> 
  /*<div>
     
      <img src="assets/saidasegura.png" alt="Logo da empresa" />
    </div>
     */