import React from 'react'

const AddTodoModal = () => {
  return (
    <>
    <div className=' w-full h-full absolute top-0 bottom-0 right-0 left-0 bg-red-200 flex items-center justify-center rounded-md	hidden' >
      <div className='w-[90%] h-2/5 bg-white p-4'>
        <p>Add Todo</p>
        <textarea  className='m-4 border-2'/>
          {/* <input type= "textarea" placeholder='add your todo' className='w-[90%] h-[80%]  border-2'/> */}
          <div className='flex justify-between items-center'><div>Cancle</div><div>Done</div></div>
      </div>
      
    </div>
    </>
  )
}

export default AddTodoModal
