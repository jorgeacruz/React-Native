import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Actions() {
 return (
   <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
    <TouchableOpacity style={styles.actionButtom}>
        <View style={styles.areaview}>
            <AntDesign name='addfolder' color="#000" size={26} />
        </View>
        <Text style={styles.labelButtom}>Entradas</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.actionButtom}>
        <View style={styles.areaview}>
            <AntDesign name='tagso' color="#000" size={26} />
        </View>
        <Text style={styles.labelButtom}>Compras</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.actionButtom}>
        <View style={styles.areaview}>
            <AntDesign name='creditcard' color="#000" size={26} />
        </View>
        <Text style={styles.labelButtom}>Carteira</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.actionButtom}>
        <View style={styles.areaview}>
            <AntDesign name='barcode' color="#000" size={26} />
        </View>
        <Text style={styles.labelButtom}>Boletos</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.actionButtom}>
        <View style={styles.areaview}>
            <AntDesign name='setting' color="#000" size={26} />
        </View>
        <Text style={styles.labelButtom}>Conta</Text>
    </TouchableOpacity>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
        maxHeight:84,
        marginBottom:14,
        marginTop:18,
        paddingEnd:14,
        paddingStart:14
    },
    actionButtom: {
        alignItems:'center',
        marginRight:32,
    },
    areaview:{
        backgroundColor:'#ecf0f1',
        height:60,
        width:60,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center'
    },
    labelButtom:{
        marginTop:4,
        textAlign:'center',
        fontWeight:'bold'
    }
})