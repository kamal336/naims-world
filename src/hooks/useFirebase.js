import initialAuthentication from './../Firebase/initializeFirebase';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from 'react';

initialAuthentication();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () =>{

    // set state 
    const [user,setUser] = useState({});
    const [error,setError] = useState("");
    const [isLoading,setIsLoading] = useState(true);
    
    // google signin method 
    const signInGoogle = () =>{
      return  signInWithPopup(auth,googleProvider); 
    }

    // register with email and password 
    const emailAndPasswordSignUp = (email,password) =>{
     return createUserWithEmailAndPassword(auth, email, password)
        
    } 

    // set user name 
    const setUserName = (name)=>{
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
            const newUser={...user, displayName: name} // recommend
            setUser(newUser)
        }).catch((error) => {
          // An error occurred
          // ...
        });
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

    // login user 
    const loginUser = (email,password) =>{
        return  signInWithEmailAndPassword(auth,email,password)

      }
  

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
        setUser,
        error,
        setError,
        signInGoogle,
        logOut,
        setUserName,
        emailAndPasswordSignUp,
        isLoading,
        setIsLoading,
        loginUser
    }
}

export default useFirebase;