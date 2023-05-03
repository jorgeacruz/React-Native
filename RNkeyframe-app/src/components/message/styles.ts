import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      zIndex:20,
      flex:1,
      width:'100%',
      height:700,
      position:'absolute',
      top:0,
      backgroundColor:'#0146ad',
      justifyContent:'flex-start',
      paddingTop:80,
      alignItems:"center",
    },
    title: {
        color:'#fff',
        fontSize:16
    },
    Vform:{
      justifyContent:"center",
      width:'80%'
    },
    inputForm:{
      borderWidth:1,
      borderColor:'#fff',
      borderRadius:4,
      height:35,
      textAlign:"center",
      marginVertical:5
    },
    logo: {
      width:150,
      height:150,
      marginVertical:30
    },
    cta2: {
      justifyContent:"center",
      alignItems:"center",
      padding:10,
      backgroundColor:'#f8c536',
      borderRadius:4
    },
    titleCad: {
      color:'#f8c536',
      fontSize:25,
      fontWeight:"bold",
      marginBottom:5
    },
    titleCad2: {
      color:'#fff',
      fontWeight:"bold",
      marginBottom:20
    }
  });
  