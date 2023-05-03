import React, { useState } from 'react';
import { Button, View, Image } from 'react-native';

import { styles } from './styles';
import { Message } from './src/components/message';

export default function App() {

  const [show, setShow] = useState(false)
  
  return (
    <View style={styles.container}>
      <Image source={{uri:'https://static.vecteezy.com/system/resources/previews/010/994/354/original/nba-logo-symbol-black-and-white-design-america-basketball-american-countries-basketball-teams-illustration-free-vector.jpg'}} 
        style={styles.logo}/>

      { show && <Message/> }

      <Button
      
        title={show ? "Fechar Cadastro" : "Cadastrar"}
        onPress={() => setShow((prevState) => !prevState)}
        
      />
    </View>
  );
}

