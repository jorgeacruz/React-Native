import React, { useContext, useState } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import {Background, Container, Logo, AreaInput, Input, SubmitButtom, SubmitText,} from '../SignIn/styles';

import { AuthContext } from '../../contexts/auth';

export default function SignUp() {

const { signUp, loadingAuth } = useContext(AuthContext);

const [nome, setNome] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

function handleSignUp(){
  if(nome === '' || email === '' || password === '') {
    alert('Preencha os campos');
  }
  

  signUp(nome, email, password);
}

 return (
   <Background>
    <Container
    behavior={ Platform.OS === 'ios' ? 'padding' : '' }
    enabled
    >

    <Logo source={require('../../assets/Logo.png')} />

    <AreaInput>
        <Input 
          placeholder='Digite seu nome'
          placeholderTextColor={'#333'}
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
      </AreaInput>

      <AreaInput>
        <Input 
          placeholder='Digite seu email'
          placeholderTextColor={'#333'}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </AreaInput>

      <AreaInput>
        <Input 
          placeholder='Digite seu password'
          placeholderTextColor={'#333'}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </AreaInput>

      <SubmitButtom activeOpacity={0.8} onPress={handleSignUp}>
        {
          loadingAuth ? (
            <ActivityIndicator size={20} color='#fff'/>
          ) : (
            <SubmitText> Cadastrar Conta </SubmitText>    
          )
        }
      </SubmitButtom>

    </Container>
   </Background>
  );
}