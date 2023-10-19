import React from "react";
import { styles } from "./styles";
import { View, Text, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Pressable, Alert } from "react-native";

export default function AppBTN(){
    function btnH(){
        alert('underlayColor');
    }
    function btnO(){
        alert('onPress,  activeOpacity');
    }
    function pressable(){
        alert('onPressIn, onPressOut, onPress');
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>More Buttons</Text>
            
            <TouchableHighlight style={styles.btnH} onPress={btnH} underlayColor="#ff0">
                <Text>TOUCHABLEHIGHLIGHT</Text>
            </TouchableHighlight>

            <TouchableOpacity style={styles.btnO} onPress={btnO} activeOpacity={0.2}>
                <Text style={{color:'#fff'}}>TOUCHABLEOPACITY</Text>
            </TouchableOpacity>

            <Pressable style={styles.btnP} onPress={pressable} >
                <Text style={{color:'#000'}}>PRESSABLE</Text>
            </Pressable>

        </View>
    )
}