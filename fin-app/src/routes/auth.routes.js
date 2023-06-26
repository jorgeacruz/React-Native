import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen 
            name="SignIn" 
            component={SignIn}
            options={{
                headerShown:false
            }} />
            <AuthStack.Screen 
            name="SignUp" 
            component={SignUp}
            options={{
                headerStyle:{
                    backgroundColor: '#000',
                },
                headerTintColor:'#fff',
                headerBackTitleVisible:false,
                headerBackTitle:'Voltar',
                title:'Cadastro de Contas',
                
            }}
            />
        </AuthStack.Navigator>
    )
}
