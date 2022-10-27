import React, { useState, useContext  } from 'react';
import { View, Text, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth'

import { Background, Container, Logo, AreaInput, Input, SubmitButton, 
  SubmitText, Link, LinkText} from './styles';

export default function SignIn() {

  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();


  
  function handleLogin(){
   
  }

 return (
   <Background>
      <Container 
          behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
          
          <Logo source={require('../../assets/Logo1.png')}/>

          <AreaInput>
            <Input
            placeholder='Digite seu E-mail'
            autoCorrect={true}
            autoCapitalize='none'
            value={email}
            onChangeText={( text ) => setEmail(text)}
            />
          </AreaInput>
          <AreaInput>
            <Input
            placeholder='Digite sua Senha'
            autoCorrect={true}
            autoCapitalize='none'
            value={senha}
            onChangeText={( text ) => setSenha(text)}
            />
          </AreaInput>

          <SubmitButton>
            <SubmitText>Acessar</SubmitText>
          </SubmitButton>

          <Link onPress={() => navigation.navigate('SignUp')}>
            <LinkText>Criar uma conta!</LinkText>
          </Link>
       </Container>
   </Background>
  );
}