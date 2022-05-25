import React,{useState,useEffect} from 'react'
import styles from "./Todo.module.css"
import { Todolist } from './Todolist';
export const Todo = () => {
    let [todos,setTodos] = useState([]);
    let [newtodo,setNewtodo] = useState("");
    // let [del,setDel] = useState([]);
    let [btn2,setBtn2] = useState(false);
    let [btn1,setBtn1] = useState(true);
    let [btn3,setBtn3] = useState(false);
    let [btn4,setBtn4] = useState(false);
    
    let ondelete = (ids)=>{
       
        // let a = todos.filter(ll=>ll.id===ids);
        // let b = a[0].id;
        // setDel([...del,b]);
        // console.log(b,"b");
      
        //     fetch("http://localhost:8000/Todo").then((r)=>r.json())
        // .then((data2)=>{
            
        //     let todoa = data2.filter(l=>{
        //         let count=0;
        //         for(let i=0;i<del.length;i++)
        //         {
        //             if(del[i]===l.id){
        //                 count=count+1;
        //             }
        //         }
        //         if(count===0) return l;
        //     })
        //     console.log(todoa,"todoa","del",del);
        //     setTodos(todoa)})
        let todoa = todos.filter(l=>l.id != ids);
        setTodos(todoa);
        setNewtodo("");
        
    }
    
    useEffect(()=>{
        if(btn2){
            fetch("http://localhost:8000/Todo?_start=5&_end=9").then((r)=>r.json()).then((data4)=>
    {console.log("data4",data4);
        setTodos(data4);
    })
        }
    },[btn2])
        
    useEffect(()=>{
        if(btn3){
            fetch("http://localhost:8000/Todo?_start=10&_end=14").then((r)=>r.json()).then((data4)=>
    {console.log("data4",data4);
        setTodos(data4);
    })
        }
    },[btn3])

    useEffect(()=>{
        if(btn4){
            fetch("http://localhost:8000/Todo?_start=15&_end=19").then((r)=>r.json()).then((data4)=>
    {console.log("data4",data4);
        setTodos(data4);
    })
        }
    },[btn4])
    
    let saveinfo= ()=>{
        fetch("http://localhost:8000/Todo",{
            method:"POST",
            headers:{
                "content-type":"application/json",

            },
            body: JSON.stringify({
                value:newtodo,
                iscompleated:true,

            })
            
        }).then((r)=>r.json()).then((data1)=>{
            // setTodos([...todos,data1]);
            setNewtodo("")})
    }
    useEffect(()=>{
        if(btn1){
            fetch("http://localhost:8000/Todo?_start=0&_end=4").then((r)=>r.json()).then((data)=>
            {console.log(data);
                setTodos(data)})
        }
        
    },[btn1])
    console.log(btn1,btn2);
  return (
        <div>
            <div className={styles.flexmain}>
                <input type="text" onChange={(e)=>{setNewtodo(e.target.value)}} />
                <button onClick={()=>saveinfo()}>+</button>
            </div>
            <Todolist todos={todos} ondelete={ondelete}/>
            <div>
                <button onClick={()=>{
                    setBtn1(true);
                    setBtn2(false);
                    setBtn3(false);
                    setBtn4(false);
                }}>page1</button>
                <button onClick={()=>{
                    setBtn2(true);
                    setBtn1(false);
                    setBtn3(false);
                    setBtn4(false);
                    console.log(btn2,"btn2")}}>page2</button>
                <button onClick={()=>{
                    setBtn2(false);
                    setBtn1(false);
                    setBtn3(true);
                    setBtn4(false);
                }}>page3</button>
                <button onClick={()=>{
                    setBtn2(false);
                    setBtn1(false);
                    setBtn3(false);
                    setBtn4(true);
                }}>page4</button>
            </div>
        </div>
    
  )
}
