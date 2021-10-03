export const fetchTasks = ()=> {
    return(dispatch ) => {
        fetch('http://127.0.0.1:3001/tasks')
        .then( resp => resp.json())
        .then( tasks => dispatch({type: 'FETCH_TASKS', tasks}))
    }

}