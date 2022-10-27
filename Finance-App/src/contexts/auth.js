import React, { createContext, useState } from 'react';
import firebase from '../services/firebaseConnection';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    
  const [user, setUser] = useState(null);

 return (
   <AuthContext.Provider value={{signed: !!user , user}}>
        {children}
   </AuthContext.Provider>
  );
}