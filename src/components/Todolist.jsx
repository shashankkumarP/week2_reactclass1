import React,{useState,useEffect} from 'react'
import { Todoitem } from './Todoitem'
export const Todolist = ({todos,ondelete}) => {
    let [lists,setLists] = useState(todos)
    // console.log("todolist",todos)

  return (
    <div>
        {todos.map((list)=>(
            <Todoitem key={list.id} list={list} ondelete={ondelete}/>
        ))}
    </div>
  )
}
