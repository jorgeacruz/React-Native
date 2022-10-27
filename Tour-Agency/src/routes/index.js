import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../pages/index';
import IndexHome from '../pages/indexHome';
import Account from "../pages/account";
import LostPassword from "../pages/lostPassword";


const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} 
                options={{
                    headerShown:false
                }}/>
                <Stack.Screen name="IndexHome" component={IndexHome} 
                options={{
                    title:'',
                    headerTintColor:'#ffdf00',
                    headerTransparent:true
                }}/>
                <Stack.Screen name="Account" component={Account} 
                options={{
                    title:'',
                    headerTintColor:'#ffdf00',
                    headerTransparent:true
                }}/>
                <Stack.Screen name="LostPassword" component={LostPassword} 
                options={{
                    title:'',
                    headerTintColor:'#ffdf00',
                    headerTransparent:true
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}