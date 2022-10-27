import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function dataEvento() {

    const navigation = useNavigation();
    
    return (
   <View style={styles.container}>
       <TouchableOpacity onPress={() => na}>
           <Text>voltar</Text>
       </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})