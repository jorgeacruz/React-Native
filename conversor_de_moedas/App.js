import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { PickerItem } from './src/components';
import { Api } from './src/services/api';


export default function App() {
  const [moedas, setMoedas] = useState([]);
  const [moedaselecionada, setMoedaselecionada] = useState(null);
  const [loading, setLoading] = useState(true);
  const [moedaBValor, setModaBValor] = useState("");

  const [valormoeda, setValormoeda] = useState(null);
  const [valorConvertido, setValorconvertido] = useState(0);

useEffect(() => {
  async function loadMoedas() {
    const response = await Api.get("all");
    
    //array para receber propriedade da api
    let arrayMoedas = [];
    Object.keys(response.data).map( (key) => {
      arrayMoedas.push({
        key: key,
        label: key,
        value: key
      })
    })

    setMoedas(arrayMoedas);
    setMoedaselecionada(arrayMoedas[0].key)
    setLoading(false)
  }
  loadMoedas();
},[])

async function converter(){
  if( moedaBValor === 0 || moedaBValor === "" || moedaselecionada === null){
    return;
  }
  const response = await Api.get(`/all/${moedaselecionada}-BRL`)
  console.log(response.data[moedaselecionada].ask)

  let resultado = (response.data[moedaselecionada].ask * parseFloat(moedaBValor))
  setValorconvertido(`${resultado.toLocaleString("pt-br", {style:'currency', currency:'BRL'})}`);
  setValormoeda(moedaBValor);
  Keyboard.dismiss()  
}

function Limpar(){
  setValorconvertido(0);
  setMoedaselecionada();
  setModaBValor();
}

if(loading){
  return(
    <View style={{justifyContent:'center', alignItems:'center', flex:1, backgroundColor: '#FFD400'}}>
       <View>
        <Image source={require('./src/images/logo.png')} style={{width:100, height:100, marginBottom:60}} />
      </View>
      <ActivityIndicator color="#000" size="large" />
    </View>
  )
}


  return (
    <View style={styles.container}>
      
      <View>
        <Image source={require('./src/images/logo.png')} style={{width:100, height:100, marginBottom:30}} />
      </View>
      <View style={styles.areamoeda}>
        <Text style={styles.titulo}>Selecione sua Moeda</Text>
        <PickerItem
        moedas={moedas}
        moedaselecionada={moedaselecionada}
        onChange={ (moeda) => setMoedaselecionada(moeda) }
        />
      </View>
      <View style={styles.areaValor}>
        <Text style={styles.titulo}>Digite o valor a converter em BRL</Text>
        <TextInput
        style={styles.input}
        placeholder='ex:. 1.20'
        keyboardType='numeric'
        value={moedaBValor}
        onChangeText={(valor) => setModaBValor(valor)}
        />
      </View>
      <TouchableOpacity style={styles.btn} onPress={converter}>
        <Text style={{color:'#fff'}}>Converter</Text>
      </TouchableOpacity>

      {valorConvertido !== 0 && (
      <View style={styles.areaResultado}>
        <Text style={styles.valorConvertido}>
          {valormoeda} {moedaselecionada}
        </Text>
        <Text style={{margin:8, fontWeight:'500', fontSize:14}}>corresnponde a</Text>
        <Text style={styles.valorConvertido}>
          {valorConvertido}
        </Text>
      <TouchableOpacity style={styles.btnLimpar} onPress={Limpar}>
        <Text style={{color:'#fff'}} >Limpar</Text>
      </TouchableOpacity>
        
      </View>
      
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:100,
    backgroundColor: '#FFD400',
    alignItems: 'center',
  },
  areamoeda:{
    width:'90%',
    backgroundColor:'#fff',
    borderTopLeftRadius:8,
    borderTopRightRadius:8,
    padding:10
  },
  titulo:{
    fontSize:16,
    fontWeight:'600'
  },
  areaValor:{
    width:'90%',
    backgroundColor:'#fff',
    padding:8
  },
  input:{
    width:'100%',
    padding:8,
    fontSize:18,
    color:'#000'
  },
  btn:{
    backgroundColor:'#000',
    padding:20,
    width:'90%',
    borderBottomRightRadius:5,
    borderBottomLeftRadius:5,
    alignItems:'center'
  },
  btnLimpar:{
    backgroundColor:'#000',
    padding:20,
    width:'100%',
    borderBottomRightRadius:5,
    borderBottomLeftRadius:5,
    alignItems:'center',
    marginTop:20
  },
  areaResultado:{
    backgroundColor:'#fff',
    width:'90%',
    justifyContent:'center',
    alignItems:'center',
    borderTopRightRadius:5,
    borderTopLeftRadius:5,
    marginTop:20,
    paddingTop:20
  },
  valorConvertido:{
    fontSize:22,
    fontWeight:'bold'
  }
});
