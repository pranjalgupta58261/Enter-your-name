import React, { useState } from 'react'

function App(){
  const [data,setData]=useState(null)
  const [print,setPrint]=useState(false)
  function getData(val){
   
    setData(val.target.value);
  }
  return(
    <div className='App'>
      <h1>Enter Your Name :</h1>
      <input type='text' onChange={getData}/>
      <button onClick={()=>setPrint(true)}>Login</button>
      {
        print?
<>
        <h1>Hey ! {data} </h1>
        <h2>Welcome to LPU College</h2>
        </>
        :null
      }
      
    </div>
  )
}
export default App;
