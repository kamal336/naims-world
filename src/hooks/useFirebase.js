import initialAuthentication from './../Firebase/initializeFirebase';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from 'react';

initialAuthentication();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () =>{

    // set state 
    const [user,setUser] = useState({});
    const [error,setError] = useState("");
    
    // google signin method 
    const signInGoogle = () =>{
      return  signInWithPopup(auth,googleProvider); 
    }

        // keep stay user 
        useEffect(()=>{
          onAuthStateChanged(auth,(user=>{
              if(user){
                  console.log('successfully added',user);
                  setUser(user)
              }
    
          })
          )
      },[])

    // signout 
    const logOut = () =>{
      signOut(auth)
      .then(()=>{
          console.log('successfully logout');
          setUser({});
      }).catch(error=>{
          setError(error.message)
      })
  }
      

    return {
        user,
        error,
        signInGoogle,
        logOut
    }
}

export default useFirebase;