export const fetchTasks = ()=> {
    return(dispatch ) => {
        fetch('http://127.0.0.1:3001/tasks')
        .then( resp => resp.json())
        .then( tasks => dispatch({type: 'FETCH_TASKS', tasks}))
    }

}

// export const addTask = (newTask)=>{
//     return (dispatch) => {
//         console.log(newTask)

//         fetch('http://127.0.0.1:3001/tasks',{
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             body: JSON.stringify(newTask)

//         })
//         .then ( resp => resp.json())
//         .then ( task => dispatch({type:'ADD_TASK', task}))
//     }
// }

export const addTask = (task) => {
    return dispatch => {
        fetch('http://127.0.0.1:3001/tasks', {
            method: 'POST',
            body: JSON.stringify(task),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(task => dispatch({ type: 'ADD_TASK', task}))
    }
}