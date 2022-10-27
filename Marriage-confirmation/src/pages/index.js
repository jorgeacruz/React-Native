import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { useFonts, Koulen_400Regular } from '@expo-google-fonts/koulen';
import AppLoading from 'expo-app-loading';


const { height, width } = Dimensions.get('screen');

export default function Home() {  
    
    //navigation
    
    //load fonts
  const [fontsLoaded]  = useFonts({ Koulen_400Regular })
  
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {


 return (
   <View style={styles.container}>
       <View>
            <Image source={require('../images/homePam.png')} style={styles.imgBG}/>
       </View>
      <View style={styles.painelBaixo}>
        <Text style={styles.Titulo}>Angela & Gabriel</Text>
        <Text style={styles.subTituilo}>CASINHA  LE JULIE</Text>
        <Text style={styles.endereco}>Alameda dos Aicás, 1303 | Moema - SP</Text>
        <Text style={styles.CronoData}>30.07.2022 | 18h30</Text>
        <TouchableOpacity style={styles.BtPresenca} onPress={() => navigation.navigate('Obrigado')}>
            <Text style={{fontWeight:'bold'}}>CONFIRME SUA PRESENÇA</Text>
        </TouchableOpacity>
      </View>
   </View>
  );
 }
}

const styles = StyleSheet.create({
      container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
      },
      imgBG: {
        height:height,
        width:width,
      },
      dataPosition: {
        position:'absolute',
        left:20,
        top:30
      },
      dataEvento: {
        fontFamily:'Koulen_400Regular', 
        position:'absolute', 
        top:10, 
        fontSize:50,
        color:'#30302f'
        
      },
      anoEvento: {
        position:'absolute',
        top:70,
        fontFamily:'Koulen_400Regular',
        color:'#30302f',
        fontSize:30
      },
      painelBaixo: {
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        bottom:40
      },
      Titulo: {
        fontSize:40,
        fontWeight:'bold',
        fontFamily:'GreatVibes_400Regular',
        paddingBottom:3,
        color:'#fff'
      },
      CronoData: {
        color:'#fff',
        fontSize:30,
        paddingBottom:5,
        fontFamily:'Koulen_400Regular'
      },
      subTituilo: {
        color:'#fff',
        fontSize:30,
        paddingBottom:2,
        fontFamily:'Koulen_400Regular'
      },
      endereco: {
        color:'#fff',
        fontSize:15,
        paddingBottom:20,
      },
      
      BtPresenca: {
        width:300,
        height:40,
        borderRadius:5,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
      }
    });
