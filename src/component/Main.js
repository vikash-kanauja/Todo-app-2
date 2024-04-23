import React from 'react'
import { FiPlusCircle } from "react-icons/fi";
import TodoItem from './TodoItem';
const todoData = [
    {name : "vikash"},
    {name : "rohan"},
    {name : "mohan"},
    {name : "sohan"},
    {name : "john"},
    {name : "max"},
    {name : "json"},
    {name : "vikash"}
] 

const Main = () => {
  return (
    <>
    <div className='flex justify-between items-center my-4 font-medium	'>
      <h3 >Today</h3>
      <div><FiPlusCircle /></div>
    </div>
    <div className='text-center font-medium	mb-8'>Todos
     {
        todoData.map((data,i)=>{
            return (
                <TodoItem key={i} name ={data.name}/>
            )
        })
     }
    </div>
    </>
  )
}


export default Main
