import React from 'react'

const Home = ({history}) => {
    return (
        <div id="home">
            <button id="active-tasks" className="homebttn" onClick={()=>history.push("/tasks")}>ACTIVE TASKS</button><br/>
            <button id="add-tasks" className="homebttn" onClick={()=>history.push("/tasks/new")}>ADD TASK</button><br/>
            <button id="exit" className="homebttn" onClick={()=>history.push("/exit")}>EXIT</button>
        </div>
    )
}

export default Home
