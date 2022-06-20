import React,{useEffect,useState} from 'react'
import './element.css'

function Element({element,onClick,id}) {
  return (
    <div  id={id} className='flex'>
      <>  
      
      
        <h1>{element}</h1>
      </>
      <button onClick={onClick}>
        <>
            Done
          
        </>
        </button>
    </div>
  )
}

export default Element