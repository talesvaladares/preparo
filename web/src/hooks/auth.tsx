import React, {useContext, createContext, useCallback, useState} from 'react';

import {authFireBase} from '../auth/firebase';

interface Credencials { 
    email: string;
    password: string;
}

interface User {
    email: string;
    id: string;
}

interface AuthContextData {
    user: User;
    token: string;
    signin(credencials: Credencials): void;
}

interface authData {
    user: User;
    token: string;
}

const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC =  ({children}) => {

    const [data, setData] = useState<authData>(() => {

        const token = localStorage.getItem('@preparo:token');
        const user = localStorage.getItem('@preparo:user');

        if(token && user) {

            return {token, user: JSON.parse(user)};
        }
        else {
            return {} as authData;
        }
    });

    const signin = useCallback(({email, password}) => {
        
        let token = '';

        if(!email) {
            alert('O email está vazia!');
            return;
        }

        if(!password) {
            alert('A senha está vazia!');
            return;

        }

        try {
            authFireBase.auth().signInWithEmailAndPassword(email, password).then(data => {
                const userData = data.user;

                authFireBase.auth().currentUser?.getIdToken().then(data => {
                  token = data;
                  localStorage.setItem('@preparo:token', token);
                });
                
                if(userData){

                    if(userData.email){
                        const email = userData.email;

                        const user = {
                            email,
                            id: userData.uid
                        }

                        localStorage.setItem('@preparo:user', JSON.stringify(user));
        
                        setData({token, user});
                    }                 

                }
               
            })
            .catch(() => {
                alert('Erro, confira suas crendenciais!');
            });
                    
        }
        catch(err) {
            console.log(err);
            return;
        }


    },[]);

    return (
        <AuthContext.Provider value={{user: data.user, token: data.token, signin}}>
            {children}
        </AuthContext.Provider>
    );  
}

export function useAuth () : AuthContextData {
    const context = useContext(AuthContext);

    return context;
}