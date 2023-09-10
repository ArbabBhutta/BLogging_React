import React from 'react'
import { useRef , useState } from 'react'
export default function AddBLogs() {
   
    let dataArray=[{
        id:0
    }]
    const [blogsID, setBlogID] =useState()
    let refId=useRef(null)
    const addin =()=>{
        setBlogID(refId.current.value)
        const obj={
            id:blogsID
        }
        dataArray.push(obj)
    }
    
   

  return (
    <div>
      <form action="">
        <input type="text" placeholder='BLog id' ref={refId} /><br />
        <input type="text" placeholder='blog head'/><br />
        <input type="text" placeholder='blog desc'/><br />
        <button onClick={addin}>Add</button>
      </form>
      <h1>{dataArry[0].id}</h1>
    </div>
  )
}
