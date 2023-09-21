import { IAuthState } from "./AuthContext";


type AuthAction={type:'signIn'}|{type:'signOut'};

//siempre retorn algo de tipo  de los datos manejados
export const authReducer=(stastate:IAuthState,action:AuthAction):IAuthState=>{

    switch (action.type) {
        case 'signIn':
            
            return {...stastate,isLoggedIn:true,userName:'no-user-yet'};
        
        case 'signOut':

        return {...stastate,isLoggedIn:false,userName:'no-user-yet'};
    
        default:
            return stastate
    }


  
}