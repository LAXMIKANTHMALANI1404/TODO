import React from "react";
import './signIn.css'
import { auth } from './Firebase_config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
const provider = new GoogleAuthProvider();
function signIn() {
    const signUpTheUser = () => {
        signInWithPopup(auth, provider).then((result) => {

        }).catch((err) => { alert(err.message) })
    }
    return (
        <>
            <div id="Hai">
                <h1 id="one">TODO</h1>
                <button id="two" onClick={() => signUpTheUser()}>SignIN</button>
            </div>
        </>)

}
export default signIn;