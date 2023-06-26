import React from 'react';
import { Platform } from 'react-native';
import { Background, Container, Logo, AreaInput, Input, SubmitButtom, SubmitText, Link, LinkText  } from './styles'
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {

  const navigation = useNavigation();

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
        />
      </AreaInput>
      <AreaInput>
        <Input 
          placeholder='Digite sua senha'
          placeholderTextColor={'#333'}
        />
      </AreaInput>

      <SubmitButtom activeOpacity={0.8}>
        <SubmitText>
          Acessar Conta
        </SubmitText>
      </SubmitButtom>

      <Link onPress={() => navigation.navigate('SignUp')}>
        <LinkText>Criar uma conta</LinkText>
      </Link>
    
    </Container>
   </Background>
  );
}

