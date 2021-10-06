export const tasksReducer = (state=[], action)=> {
     switch(action.type){
          case 'FETCH_TASKS':
             return action.tasks
          case 'ADD_TASK':      
            return state.concat(action.task) //[...state, action.task]
          case 'UPDATE_TASK':
             return state.filter(task => task.id !== action.task.id ).concat(action.task)  
          case 'DELETE_TASK':
               return state.filter(task => task.id !== action.id) 

          default: 
            return state
     }
}