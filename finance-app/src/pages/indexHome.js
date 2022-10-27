import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Dimensions, Animated, ImageBackground } from 'react-native';


const {width, height} = Dimensions.get('screen');

export default function IndexHome() {

    const navigation        = useNavigation();
    const [nome,setNome]    = useState();
    const [email,setEmail]  = useState();

    function handleLogin(){
        if(nome == ''){
            alert('Digite o cep desejado.');
            return;
          }
    }

 return (
   <View style={styles.container}>
     <ImageBackground source={require('../image/bg2.jpg')} style={{width:width, height:height, opacity:0.8}} blurRadius={2}>
    <Animated.View style={styles.loginArea}>
            
            <Text style={styles.sloganText}> Explore os</Text>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.textMelhores}> Melhores </Text>
                <Text style={styles.textFerias}> Lugares </Text>
            </View>
            <Text style={[styles.sloganText,{marginBottom:'45%'}]}>  para sua Férias</Text>

            <TextInput
            style={styles.textInput}
            placeholder='Digite sua nome'
            placeholderTextColor={'#fff'}
            value={nome}
           //onChangeText={(text) => setNome(text)}
            />
            <TextInput
            style={styles.textInput}
            placeholder='Digite sua senha'
            placeholderTextColor={'#fff'}
            value={email}
            onChangeText={(text) => setEmail(text)}
            
            />

            <View style={styles.areaBtn}>
                <TouchableOpacity style={[styles.btnCriConta,{backgroundColor:'#fff'}]} onPress={() => navigation.navigate('Account')}>
                    <Text>Criar Conta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnLogin} onPress={handleLogin}>
                    <Text style={{color:'#fff'}}>Fazer Login</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{marginTop:20}} onPress={() => navigation.navigate('LostPassword')}>
                    <Text style={{color:'#fff'}}>Esqueci minha senha</Text>
            </TouchableOpacity>
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
        backgroundColor:'#000000'
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
        backgroundColor:'#1A1B1A',
        padding:10,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        width:155
    },
    btnLogin: {
        backgroundColor:'#009c3b',
        padding:10,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        width:155
    }
})