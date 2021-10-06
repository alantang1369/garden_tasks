import React from 'react'
import { connect } from 'react-redux'
import TaskCard from './TaskCard'

const TasksList = (props) => {
    const activeTasks = props.tasks.filter(task => task.status === "active")
    return (
        <div>
            {activeTasks.map(task => <TaskCard task={task} key={task.id} history={props.history}/>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(TasksList)