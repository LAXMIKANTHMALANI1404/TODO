// @ts-nocheck
import  React, { useEffect, useState } from 'react';
import './App.css';
import SignIn from './components/SingIn';
// @ts-ignore
import { getAuth, signOut } from 'firebase/auth';
import { fireStore, auth } from './components/Firebase_config';
// @ts-ignore
import { collection, setDoc, doc, getDoc, DocumentSnapshot } from 'firebase/firestore'

import Element from './components/element';


function App() {

  // @ts-ignore
  const [dat, setDat] = useState([]);//{}
  // @ts-ignore
  const [cnt, setCnt] = useState(0);
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const y = user?.uid;
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // @ts-ignore
      setUser(user);
    })
    async function x() {
      // console.log("Hai");

      const ref = doc(fireStore, "AddTodo", y);
      // console.log(ref);
      //check it out error
      // console.log("Hai");
      const docSnap = await getDoc(ref);
      if (docSnap.exists()) {
        setDat(docSnap.data().Todo1);
        // console.log(docSnap.data().Todo1);
      }
    }
    x();


  }, [user])

  function AddMessage(message) {
    if (message != "") {

      async function x() {
        // @ts-ignore
        const cityRef = doc(fireStore, 'AddTodo', y);
        // setDoc(cityRef, { todo1:"Hi" }, { merge: true });
        await setDoc(cityRef, { Todo1: [...dat, message] });
        setDat([...dat, message])
        setMessage("");
      }
      x();
    }
  }
  
  function fu(index){
    let f = [...dat];
    // f.filter((item,ind)=>(ind!==index));
    f.splice(index, 1);
    // console.log(f);
    setDat(f);
    let x = document.getElementById(`id${index}`)
    x.classList.remove('change')
  }
  function onClick(index) {
    let x = document.getElementById(`id${index}`)
    x.classList.add('change');
    setTimeout(()=>fu(index),1000);
    console.log("Hai");
    // let f = [...dat];
    // // f.filter((item,ind)=>(ind!==index));
    // f.splice(index, 1);
    // // console.log(f);
    // setDat(f);

   
  }
  function f() {
    
    async function z() {
      const cityRef = doc(fireStore, 'AddTodo', y);
      await setDoc(cityRef, { Todo1: [...dat] });
    } z();


  }
  useEffect(
    () => { f() }
    , [dat])


  // @ts-ignore


  return (
    <div className="App">
      {
        !user ? <SignIn /> :
          <>
            <div className='sticky'>
              <div className='nav'>
                <h1 className='Welcome'>
                  Welcome {user?.
                    // @ts-ignore
                    displayName}
                </h1>
                <h1 className='TODO'>TODO</h1>

                <div className='right' >
                  <img src={user?.photoURL} />
                  <button onClick={() => auth.signOut()}>Sign Out</button>
                </div>
              </div>
              <div className='AddTodo'>

                <input type="text" value={message} onChange={e => (setMessage(e.target.value))} onKeyPress={(e)=>{if(e.key=='Enter')AddMessage(message)}} />
                <button type="submit" onClick={() => AddMessage(message)} onKeyPress={e => e.key === 'Enter' ? AddMessage(message) : console.log("No")}>Add Todo</button>
              </div>
            </div>
            <div className='container'>
              {
                dat.map((element, index) => {
                  return <Element key={index} element={element} onClick={() => onClick(index)} id={`id${index}`} />
                })
              }
            </div>

          </>
      }

    </div>
  );
}

export default App;
