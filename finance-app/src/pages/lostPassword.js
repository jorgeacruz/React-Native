import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Dimensions, Animated, ImageBackground } from 'react-native';
import IndexHome from './indexHome';


const {width, height} = Dimensions.get('screen');

export default function LostPassword() {

    const navigation = useNavigation();

    function resetPassword(){
        navigation.navigate(IndexHome);
    }

 return (
   <View style={styles.container}>
     <ImageBackground source={require('../image/bg.jpg')} style={{width:width, height:height, opacity:0.8}} blurRadius={2}>
    <Animated.View style={styles.loginArea}>
            
            <Text style={styles.sloganText}> Verdadeiros</Text>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.textMelhores}> Paraísos </Text>
                <Text style={styles.textFerias}> Naturais </Text>
            </View>
            <Text style={[styles.sloganText,{marginBottom:'35%'}]}>  em todo Brasil</Text>

            <TextInput
            style={styles.textInput}
            placeholder='Digite seu email cadastrado'
            placeholderTextColor={'#fff'}
            />

            <View style={styles.areaBtn}>
                <TouchableOpacity style={styles.btnCriConta} onPress={resetPassword}>
                    <Text style={{color:'#fff'}}>Recuperar Senha</Text>
                </TouchableOpacity>
            </View>
    </Animated.View>
    </ImageBackground>
   </View>
  );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#000'
    },
    logo: {
        height:80,
        marginBottom:60
    },
    loginArea: {
        flex:1, 
        alignItems:'center',
        marginTop:300
    },
    textInput: {
        backgroundColor:'#002776',
        height:40,
        textAlign:'center',
        width:'100%'
    },
    sloganText: {
        fontSize:26, 
        color:'#fff', 
        fontWeight:'bold', 
        marginVertical:2,
    },
    textMelhores: {
        fontSize:35,
        color:'#ffdf00',
        fontWeight:'bold',
       
    },
    textFerias: {
        fontSize:35,
        color:'#ffdf00',
        fontWeight:'bold'
    },
    areaBtn: {
        flexDirection:'row', 
        marginTop:20,
        paddingHorizontal:15, 
        justifyContent:'space-around', 
        width:'100%'
    },
    btnCriConta: {
        backgroundColor:'#009c3b',
        padding:10,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        width:200
    },
   
})