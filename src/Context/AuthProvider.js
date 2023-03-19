import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config'
import toast from 'react-hot-toast';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    //after loginif we reload privateroute page it redirects to login again
    // so to ignore we use loading
    const[loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);//since new user is created
        return createUserWithEmailAndPassword(auth, email, password);
       //register
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password);
    }//login

    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    } 

    const provider = new GoogleAuthProvider();

    
    const verifyEmail =() => {
        sendEmailVerification(auth.currentUser)
        .then( ()=>{
            toast('Please check your email to verify Email Address')
        })
    }


//GET CURRENTLY SIGNEDin User
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing');
            setUser(currentUser);
            setLoading(false)
        });

        return () => unsubscribe();
    }, [])
    const authInfo = {
        createUser,
        signIn,
        updateUser,
        user,
        loading,
        logOut,
        verifyEmail,
        provider
    }

   return (
       
            <AuthContext.Provider value= {authInfo}>
                {children}
            </AuthContext.Provider>
      
    );
};

export default AuthProvider;