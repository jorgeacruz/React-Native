import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Routes from './src/routes';
export default function App() {
 return (
   <Routes/>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})