import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig';

const initialAuthentication = () =>{
    initializeApp(firebaseConfig)
}

export default initialAuthentication;