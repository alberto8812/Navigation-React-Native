import React, { useReducer } from 'react'



//definir como luce , que informacion tendre aqui

import { createContext } from "react";
import { authReducer } from './AuthReducer';

export  interface IAuthState{
    isLoggedIn: boolean;
    userName?: string;
    favoriteIcon?: string;
}

//estado iniical
export const authInicialState: IAuthState = {
    isLoggedIn: false,
    userName: undefined,
    favoriteIcon: undefined,
};

//lo usaremos para decirle a react como luce y que expone el contexto

export interface AuthContextProps{
    authState:IAuthState;
    signIn:()=>void;
}

//crear el contexto 
export const AuthContext=createContext({} as AuthContextProps)



//conponente proveedro del estado
export const AuthProvider= ({children}:any) => {
    const [authState, dispatch] = useReducer(authReducer, authInicialState)

    const signIn=()=>{
        dispatch({
            type: 'signIn',
            
        })
    }


  return (
    <AuthContext.Provider value={{
        authState,
        signIn
    }}>
        {children}
    </AuthContext.Provider>
  )
}
