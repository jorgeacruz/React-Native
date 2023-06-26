import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import { Background, Container, Logo, AreaInput, Input, SubmitButtom, SubmitText, Link, LinkText  } from './styles'
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';

export default function SignIn() {

  const navigation = useNavigation();
  const {signIn, loadingAuth } = useContext(AuthContext);

  //dados login
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleLogin(){
    signIn(email, password);
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
          placeholder='Digite seu email'
          placeholderTextColor={'#333'}
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={{textTransform:'lowercase'}}
        />
      </AreaInput>
      <AreaInput>
        <Input 
          placeholder='Digite sua senha'
          placeholderTextColor={'#333'}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          style={{textTransform:'lowercase'}}
        />
      </AreaInput>

      <SubmitButtom activeOpacity={0.8} onPress={handleLogin}>
        {
          loadingAuth ? (
            <ActivityIndicator size={20} color="#fff" />
          ) : (
            <SubmitText> Acessar Conta</SubmitText>
          )
        }
        
      </SubmitButtom>

      <Link onPress={() => navigation.navigate('SignUp')}>
        <LinkText>Criar uma conta</LinkText>
      </Link>
    
    </Container>
   </Background>
  );
}

