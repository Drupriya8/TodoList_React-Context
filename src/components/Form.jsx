import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../context/GlobalContext'

function Form() {

       const {edit , saveTodo , updateTodo} = useContext(GlobalContext)

    const [text , setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(edit.isedit){
             updateTodo(edit.todo.id , text)
        }else{
          saveTodo(text)  
        }
        setText("")
    }

    useEffect(()=>{
       setText(edit.todo.text)
    },[edit])

  return (
    <form className="mt-3" onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <input value={text} type="text" className="form-control" required onChange={(e)=>setText(e.target.value)}/>
          </div>

          <button type="submit" className="btn btn-primary w-100 ">Submit</button>
        </form>
  )
}

export default Form
