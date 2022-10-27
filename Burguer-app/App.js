import React from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TextInput } from 'react-native';
import { TextInputMasked } from 'react-native-masked-text';
import Swiper from 'react-native-swiper';

const {width,height} = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./src/images/burger1.jpeg')} style={styles.IMG} >
        <View style={styles.container}>
          <TextInput
          style={styles.inputText}
          placeholder='Digite seu email'
          placeholderTextColor={'#fff'}
          />
          <TextInputMasked/>
         
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#000",
  },
  IMG: {
    width:width,
    height:height,
    opacity:0.6
  },
  inputText: {
    borderWidth:1,
    borderColor:'#fff',
    borderRadius:6,
    padding:5,
    marginBottom:5,
    width:'80%'
  }
  
});
