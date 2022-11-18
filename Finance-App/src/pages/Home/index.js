import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AuthContext } from '../../contexts/auth';

export default function Home() {

  const { user } = useContext(AuthContext);

 return (
   <View style={styles.container}>
       <Text>Home</Text>
       <Text>{ user && user.nome }</Text>
       <Text>{ user && user.email }</Text>
       <Text>{ user && user.saldo }</Text>
   </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})