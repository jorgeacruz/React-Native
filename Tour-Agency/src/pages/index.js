import React, { useState, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import { StyleSheet, Text, View, Dimensions, Image, StatusBar, Animated, TouchableOpacity } from 'react-native';
import IndexHome from './indexHome';


const {width,height} = Dimensions.get('screen');

export default function Home() {
    
    const navigation = useNavigation();
    const transparencia = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {

    Animated.timing(transparencia,{
      toValue:1,
      duration:4000,
      useNativeDriver:true
    }).start();

  },[])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" hidden={true}/>

      <Swiper autoplay={true} autoplayTimeout={6} showsPagination={false}>
          <Image source={require('../image/bg2.jpg')} style={{width:width, height:height, opacity:0.6}} blurRadius={3}/>
          <Image source={require('../image/bg.jpg')}  style={{width:width, height:height, opacity:0.6}} blurRadius={3}/>
          <Image source={require('../image/bg3.jpg')} style={{width:width, height:height, opacity:0.6}} blurRadius={3}/>
          <Image source={require('../image/bg4.jpg')} style={{width:width, height:height, opacity:0.6}} blurRadius={3}/>
      </Swiper>
      
      <View style={styles.areaLogo}>
          <Image source={require('../image/logo.png')} />
      </View>
      <Animated.View style={[styles.Titulo,{opacity:transparencia}]}>
        <Text style={styles.subTitle}>Seu próximo destino de férias</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.textVerde}>Caribe</Text>
            <Text style={styles.textAmarelo}>Brasileiro</Text>
          </View> 
      </Animated.View>

      <Animated.View style={[styles.areaBtn,{opacity:transparencia}]}>
          <TouchableOpacity onPress={() => navigation.navigate(IndexHome)}>
            <Text style={styles.textBtn}>ENTRAR</Text>
          </TouchableOpacity>
      </Animated.View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Titulo: {
    flexDirection: 'column',
    position:'absolute',
    bottom:190,
    right:-230,
    transform:[{rotate:'270deg'}],
    width:495,
    height:200,

  },
  textVerde: {
    color:'#009c3b',
    fontSize:65,
    fontWeight:'bold',
    marginRight:20
  },
  textAmarelo: {
    color:'#ffdf00',
    fontSize:60,
    fontWeight:'bold'
  },
  textTitulo: {
      color:'#fff',
      fontSize:60,
      fontWeight:'bold'
  },
  subTitle: {
    fontSize:22, 
    height:40, 
    fontWeight:'300', 
    color:'#fff',
    marginBottom:-23
  },
  areaBtn:{
    width:200,
    position:'absolute',
    bottom:40,
    left:10,
    alignItems:'center'
  },
  textBtn: {
    color:'#fff', 
    fontWeight:'bold', 
    fontSize:30
  },
  areaLogo: {
    position:'absolute',
    top:45,
    left:25
  }


});
