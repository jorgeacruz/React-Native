import React, { useContext } from "react";
import { ActivityIndicator, View } from 'react-native';

import { AuthContext } from "../contexts/auth";

import AuthRoutes from "./auth.routes";
import AppRoutes from './app.routes';

export default function Routes(){

    const { signed } = useContext(AuthContext);
    const loading = false;

    return(
        signed ? <AppRoutes/> : <AuthRoutes/>
    )
}