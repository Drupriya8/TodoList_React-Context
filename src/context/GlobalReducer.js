

    const GlobalReducer = (state , action) => {
    switch(action.type) {
      case 'GET': {
        return {
          ...state,
          todos: [
            ...state.todos,
            action.payload 
  
          ]
        }
      }
      case 'DELETE': {
        return {
          ...state,
         
          todos: 
            state.todos.filter(todo => {
              if (todo.id !== action.payload) {
                return todo
              }            
            }
            )          

        }
      }
      case 'EDIT': {
        return {
          ...state,
          edit : {
            todo : action.payload,
            isedit : true
          }
        }
      }

      case 'UPDATE' : {
        return {
          ...state,
          todos : state.todos.map(item => item.id === action.payload.id ? { ...item, text : action.payload.text } : item),
          edit : {
            todo : {},
            isedit : false
          }
        }

      }
        
      
      default:
        return state
    }
  }

  export default GlobalReducer

