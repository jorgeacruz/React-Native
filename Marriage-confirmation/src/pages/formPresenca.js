import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ThkUpage from './paGina';
import Obrigado from './obrigado';
import Home from './index';


export default function ConfirmePresenca() {
    const navigation = useNavigation();
    

    return (
   <View style={styles.container}>
       <StatusBar hidden={true} />
            <View style={{justifyContent:'center', alignItems:'center', paddingBottom:50}}>
                <Image source={require('../images/pam1.png')} style={{width:430, height:360}}/>
                <Text style={styles.TitleConfirma}>Confirme sua presença!</Text>

                <Text style={{color:'#fff'}}>Você irá ao evento?</Text>
                <View style={styles.FormatoTexto}>
                        <TextInput placeholder='Insira seu nome completo' placeholderTextColor={'#ffff'} style={{paddingStart:4, color:'#fff'}}/>
                    </View>
                    <View style={styles.FormatoTexto}>
                        <TextInput placeholder='Insira seu telefone de contato' placeholderTextColor={'#ffff'} style={{paddingStart:4, color:'#fff'}}/>
                    </View>
                    <View style={styles.FormatoTexto}>
                        <TextInput placeholder='Insira seu melhor email' placeholderTextColor={'#ffff'} style={{paddingStart:4, color:'#fff'}}/>
                        
                    </View>
                    <Text style={{color:'#fff', padding:10}}>Quantidade de aldulto incluindo voce</Text>
                    <Text style={{color:'#fff', padding:20}}>Quantidade de crianças</Text>
                    <View>
                        <TouchableOpacity style={styles.btConfirmar} onPress={() => navigation.navigate('paGina')}>
                            <Text>CONFIRMA SUA PRESENÇA</Text>
                        </TouchableOpacity>
                    </View>
            </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#084F17',
        justifyContent:'center',
        alignItems:'center'
    },
    TitleConfirma: {
        color:'#fff',
        fontSize:20,
        padding:10
    },
    formArea: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    TextoEntrada: {
        flex:1,
        width:300,
        height:2,
        borderWidth:1,
    },
    FormatoTexto: {
        borderWidth:1, 
        borderColor:'#fff', 
        width:300, 
        height:40, 
        borderRadius:8, 
        margin:10, 
        justifyContent:'center', 
        alignItems:'center'
    },
    btConfirmar: {
        padding:10, 
        backgroundColor:'#fff', 
        borderRadius:5, 
        width:300, 
        alignItems:'center'
    }
});