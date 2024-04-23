import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import AddTodoModal from './AddTodoModal'
const Todos = () => {
  return (
    
    <div className='w-[90%] border-b-2 m-auto '>
      <Navbar />
      <Main />
      <AddTodoModal />
    </div>
    
  )
}

export default Todos
