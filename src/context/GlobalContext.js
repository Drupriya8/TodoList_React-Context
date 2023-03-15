import { createContext, useReducer } from "react";
import { useState } from "react";
import GlobalReducer from "./GlobalReducer";

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {


  const initialState = {
    todos: [],
    edit: {
      todo: {},
      isedit: false
    }
  }

  const [state, dispatch] = useReducer(GlobalReducer, initialState)


  // save todo
  const saveTodo = (text) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text: text
    }

    dispatch({
      type: "GET",
      payload: newTodo
    })


  }

  // Delete todo
  const deleteTodo = (id) => {

    dispatch({
      type: "DELETE",
      payload: id

    })
  }


  // Edit Todo
  const editTodo = (todo) => {
        dispatch({
          type : "EDIT",
          payload : todo
        })
  }

  // Update todo

  const updateTodo = (id, text) => {
    // setTodos(todos.map(item => item.id === id ? { ...item, text: text } : item))
      const updated = {
        id ,text
      }
      dispatch({
        type : "UPDATE",
        payload : updated
      })
  }

  return (
    <GlobalContext.Provider value={{
      todos: state.todos,
      saveTodo,
      deleteTodo,
      edit : state.edit,
      editTodo,
      updateTodo
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext