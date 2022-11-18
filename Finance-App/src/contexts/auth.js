import React, { createContext, useState, useEffect } from 'react';
import firebase from '../services/firebaseConnection';



export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    
  const [user, setUser] = useState(null);

  
  
  //função SIGNIN - logar usuario
  async function signIn(email, password){
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then(async (value) => {
      let uid = value.user.uid;
      await firebase.database().ref('users').child(uid).once('value')
      .then((snapshot) => {
        let data = {
          uid: uid,
          nome: snapshot.nome,
          password: value.user.email,
        };
        setUser(data);
        storeUser(data);
      })
    })
    .catch((error) => {
      alert(error.code);
    })
  }

  //função SIGNUP - cadastrar usuario
  async function signUp(email, password, nome){
    await firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(async (value) => {
      let uid = value.user.uid;
      await firebase.database().ref('users').child(uid).set({
        saldo:0,
        nome: nome,
      })
      .then(() => {
        let data = {
          uid: uid,
          nome: nome,
          email: value.user.email
        };
        setUser(data);
        storeUser(data);
      })
    })
    .catch((error) => {
      alert(error.code);
    })
  }

  //Função STORAGE - manter logado
  async function storeUser(data){
    await AsyncStorage.setItem('Auth_user', JSON.stringify(data));

  }

 return (
   <AuthContext.Provider value={{signed: !!user , user, signUp, signIn}}>
        {children}
   </AuthContext.Provider>
  );
}