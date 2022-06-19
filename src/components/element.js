import React,{useEffect,useState} from 'react'
import './element.css'

function Element({element,onClick,styles}) {
  const [sty,setSty]=useState({});
 const [bo,setBo]=useState(false);
function x(){
  onClick();
  setBo(true);
}
 useEffect(()=>setSty(styles),[bo]);
  return (
    <div style ={sty} className='flex change'>
        <h1>{element}</h1>
      <button onClick={x}>
        <>
            Done
            {console.log(styles)}
        </>
        </button>
    </div>
  )
}

export default Element