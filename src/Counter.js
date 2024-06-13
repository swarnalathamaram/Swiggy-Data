//import React, { useMemo, useState } from 'react'
import React from 'react'
import { useReducer } from 'react'

function Counter() {
  function handleData(state,input){
    return state+input 
  }
  let [count,dispatch] =useReducer(handleData,0)
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{
        dispatch(1)
      }} className='bg-red-800 text-white p-1'>increase</button>
    </div>
  )
}

export default Counter