export const tasksReducer = (state=[], action)=> {
     switch(action.type){
        case 'FETCH_TASKS':
             return action.tasks
        case 'ADD_TASK': 
            return state.concat(action.task) //[...state, action.task]
        default: 
            return state
     }
}