import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

export default function App() {

  const [real, setReal] = useState('');
  const [dollar, setDollar] = useState('');


  function converterDollar(){
    if(real === ''|| dollar === ''){
      alert('Preencha os campos');
      return;
    }
    totalCotacao = parseFloat(real) / parseFloat(dollar);
    alert('R$ '+ totalCotacao.toFixed(2))
  }

  function Limpar(){
    setDollar('');
    setReal('');
  }

  return (
    <View style={styles.container}>
      <Image source={require('./src/img/logo.png')} style={styles.logo}/>
      <TextInput style={styles.campos} keyboardType='numeric' 
      placeholder='Digite valor em Real'
      placeholderTextColor={"#000"}
      onChangeText={(text) => setReal(text)}
      value={real}
      />

      <TextInput style={styles.campos} keyboardType='numeric'
      placeholder='Digite valor em Dollar'
      placeholderTextColor={"#000"}
      onChangeText={(text) => setDollar(text)}
      value={dollar}/>

<View style={{width:'90%', flexDirection:'row',}}>

   <TouchableOpacity style={styles.ctaConverter} onPress={converterDollar}>
        <Text style={{color:'#fff', textAlign:'center', justifyContent:'space-evenly'}}>Converter</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.ctaConverter} onPress={Limpar}>
        <Text style={{color:'#fff', textAlign:'center'}}>Limpar</Text>
    </TouchableOpacity>
</View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ce46d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  campos: {
    textAlign:'center',
    borderColor:'#000',
    borderWidth:1,
    borderRadius:5,
    width:'90%',
    height:40,
    marginVertical:5
  },
  ctaConverter:{
    padding:20,
    backgroundColor:'#000',
    marginHorizontal:2,
    width:'49%',
    borderRadius:5
  },
  logo:{
    width:200,
    height:200,
    position:'relative',
    top:-90
  }
});
