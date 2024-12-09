'use client';

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "@/firebase";

const AuthContext = createContext();

export function AuthProvider({children}){
  const [user, setUser] = useState(null);

   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
    return () => unsubscribe();
   }, []);

   const signIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
   }

   const logOut = ()=>{
    return signOut(auth);
   };

   return(
    <AuthContext.Provider value={{user, signIn, logOut}}>
     {children}
    </AuthContext.Provider>
   );
}

export function useAuth() {
   return useContext(AuthContext);
}