import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Routes from './src/routes';
export default function App() {
 return (
   
   <View>
      <Routes/>
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