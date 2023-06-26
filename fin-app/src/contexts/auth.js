import React, { createContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import api from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadignAuth] = useState(false);

  const navigation = useNavigation();

  async function signUp(nome, email, password){

    setLoadignAuth(true);
    try{
      const response = await api.post('/users',{
        name:nome,
        email:email,
        password:password
      })
      setLoadignAuth(false);
      navigation.goBack();
    } catch(err) { 
      console.log('Erro ao cadastrar');
      setLoadignAuth(false);
    }
  }

  return <AuthContext.Provider value={{signed: !!user, user, signUp, loadingAuth}}>
            {children}
          </AuthContext.Provider>;
}

export default AuthProvider;
