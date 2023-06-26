import React, { useContext } from "react";
import { ActivityIndicator, View } from 'react-native';

import { AuthContext } from "../contexts/auth";

import AuthRoutes from "./auth.routes";
import AppRoutes from './app.routes';

export default function Routes(){

    const { signed, loading } = useContext(AuthContext);

    if(loading){
        return(
            <View style={{flex:1, backgroundColor:'#000', justifyContent:"center", alignItems:"center"}}>
                <ActivityIndicator size={20} color="#f60" /> 
            </View>
        )
    }

    return(
        signed ? <AppRoutes/> : <AuthRoutes/>
    )
}