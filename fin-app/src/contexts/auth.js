import React, { createContext, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import api from "../services/api";

import AsyncStorage from "@react-native-async-storage/async-storage";


export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadignAuth] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {

    async function loadStorage(){
      const storageUser = await AsyncStorage.getItem('@finToken');

      if(storageUser){

        const response = await api.get('/me', {
          headers: {
            'Authorization': `Bearer ${storageUser}`
          }
        })
        .catch(() => { setUser(null); })

        api.defaults.headers['Authorization'] = `Bearer ${storageUser}`;
        setUser(response.data);
        setLoading(false);
      }
      setLoading(false);
    }
  },[])
  
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
      console.log('Erro ao cadastrar', err);
      setLoadignAuth(false);
    }
  }

  //funçao login
  async function signIn(email, password){
    
    setLoadignAuth(true);

    try{

      const response = await api.post('/login', {
        email:email,
        password:password
      })

      const { id, name, token } = response.data;
      const data = { id, name, token, email,};

      //gravando AsyncStore
      await AsyncStorage.getItem('@finToken', token);
      api.defaults['Authorization'] = ` Bearer ${token}`;
      

      setUser({id, email, password});
      setLoadignAuth(false);

    } catch(err){
      console.log("Erro ao logar", err);
      setLoadignAuth(false);
    }
  }
  return <AuthContext.Provider value={{signed: !!user, user, signUp, signIn, loadingAuth, loading}}>
            {children}
          </AuthContext.Provider>;
}

export default AuthProvider;
