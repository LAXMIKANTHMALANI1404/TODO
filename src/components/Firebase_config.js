import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCbCDPNfmHtV28O_fuQ8uv3X1Vgo8o4PVA",
    authDomain: "todo-eb496.firebaseapp.com",
    projectId: "todo-eb496",
    storageBucket: "todo-eb496.appspot.com",
    messagingSenderId: "307756326955",
    appId: "1:307756326955:web:bff49760adb8cecce70a6e",
    measurementId: "G-JHF3GD3571"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const fireStore = getFirestore(app);