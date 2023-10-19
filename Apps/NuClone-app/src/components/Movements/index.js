import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Movements({ data }) {

    const [show, setShow] = useState(false);

 return (
   <TouchableOpacity style={styles.container} onPress={() => setShow(!show)}>
        <Text style={styles.date}>{data.date}</Text>

        <View style={styles.content}>
            <Text style={styles.label}>{data.label}</Text>
            { show ? (
                <Text style={ data.type === 1 ? styles.value : styles.expenses}>
                { data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
                </Text>
            ) : (
                <View style={styles.skeleton}>
                </View>
            )
            }
            

        </View>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:24,
        borderBottomColor:'#dadada',
        borderBottomWidth:0.5
    },
    content:{
        flexDirection:'row', 
        justifyContent:'space-between',
        marginTop:2,
        marginBottom:2
    },
    date: {
        color:'#dadada',
        fontWeight:'bold'
    },
    label:{
        fontWeight:'bold',
        fontSize:16,
        color:'#000'
    },
    value:{
        color:'#2ecc71',
        fontSize:16,
        fontWeight:'bold'
    },
    expenses:{
        color:'#e74e3c',
        fontSize:16,
        fontWeight:'bold'
    },
    skeleton:{
        marginTop:6,
        width:80,
        height:10,
        borderRadius:8,
        backgroundColor:'#dadada'
    }
})