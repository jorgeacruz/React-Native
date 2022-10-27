import React, { useState, useContext } from 'react';
import { Platform } from 'react-native';


import { Background, Container, Logo, AreaInput, Input, SubmitButton, 
  SubmitText, } from '../SignIn/styles';

export default function SignUp() {

  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();


 return (
   <Background>
      <Container 
          behavior={Platform.OS === 'ios' ? 'padding' : ''}
          enabled
      >
          <Logo source={require('../../assets/Logo1.png')}/>

          <AreaInput>
            <Input
            placeholder='Digite seu Nome'
            autoCorrect={true}
            autoCapitalize='none'
            value={nome}
            onChangeText={( text ) => setNome(text)}
            />
          </AreaInput>
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
            <SubmitText>Cadastrar</SubmitText>
          </SubmitButton>

          
       </Container>
   </Background>
  );
}