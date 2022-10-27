import React, { useState, useRef } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image, Keyboard } from 'react-native';
import api from './src/services/api';

export default function App() {
  const [cep, setCep] = useState();
  const inputRef = useRef(null);
  const [cepUser, setCepUser] = useState(null);

  async function buscar() {
    if(cep == ''){
      alert('Digite o cep desejado.');
      return;
    } 
    try {

      const response = await api.get(`/${cep}/json`);
      console.log(response.data);
      setCepUser(response.data);
      Keyboard.dismiss(); // fecha teclado
    
     } catch(error) {
      console.log('ERROR: ' + error);
     }
  }

 

  function limpar(){
    setCep('');
    setCepUser('');
    inputRef.current.focus();
  }
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./src/img/logo.png') }style={{width:300, height:150, marginBottom:50}} />
      
      <TextInput
      style={[styles.input,{textAlign:'center'}]}
      placeholder="Digite seu cep desejado"
      value={cep}
      onChangeText={(texto) => setCep(texto)}
      keyboardType="numeric"
      ref={inputRef}
      maxLength={8}
      />
      <View style={styles.areaBtn}>
        <TouchableOpacity 
        style={[styles.botao,{backgroundColor:'#1d75cd', borderTopLeftRadius:8, borderBottomLeftRadius:8}]}
        onPress={buscar}>
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={[styles.botao,{borderTopRightRadius:8, borderBottomRightRadius:8}]}
        onPress={limpar}
        >
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>
      { cepUser &&
        <View style={styles.resultado}>
          <Text style={[styles.itemText,{
            fontWeight:'bold',
            fontSize:25,
            paddingBottom:5
          }]}>{cepUser.cep}</Text>
        
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text style={[styles.itemText,{
            fontSize:23
          }]}>{cepUser.logradouro}</Text>
          <Text style={[styles.itemText,{
            fontSize:23,
          }]}> - {cepUser.bairro}</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text style={[styles.itemText,{
            fontSize:26,
            fontWeight:'500'
          }]}>{cepUser.localidade}</Text>
          <Text style={[styles.itemText,{
            fontSize:26,
            fontWeight:'500'
          }]}> - {cepUser.uf}</Text>
          </View>
        </View>
      }
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    backgroundColor:'#fdd131',
    justifyContent:'center'
  },
  text: {
    marginTop:25,
    marginBottom:15,
    fontSize:25,
    fontWeight:'bold'
  },
  input: {
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor:'#ddd',
    width:'90%',
    padding:20,
    borderRadius:8, fontSize:18
  },
  areaBtn: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    marginTop:10
  },
  botaoText: {
    color:'#fff'
  },
  botao: {
    backgroundColor:'#000',
    padding:5,
    width:190,
    height:50,
    alignItems:'center',
    justifyContent:'center'
  },
  resultado: {
    marginTop:40,
    justifyContent:'center',
    alignItems:'center'
  }
})

