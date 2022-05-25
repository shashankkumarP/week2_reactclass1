import React from 'react'

export const Todoitem = ({list,ondelete}) => {
    let [item,setItem] = React.useState(list)
    console.log("todoitem",list)
  return (
    <div key={item.id} style={{display:"flex",gap:"25px",marginTop:"10px",marginLeft:"35px"}}>
        <input type="checkbox" style={{width:"10%"}} />
        <div style={{width:"60%"}}>{item.value}</div>
        <button onClick={()=>{ondelete(item.id)}}>Delete</button>
    </div>
  )
}
