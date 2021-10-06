import React from 'react';
import {Link} from 'react-router-dom';
import {updateTask, deleteTask} from '../actions/TaskActions'
import { connect } from 'react-redux';
const TaskCard= ({task, updateTask, deleteTask, history})=> {
    const DaysBetween = (StartDate, EndDate) => {
        // The number of milliseconds in all UTC days (no DST)
        const oneDay = 1000 * 60 * 60 * 24;
      
        // A day in UTC always lasts 24 hours (unlike in other time formats)
        const start = Date.UTC(EndDate.getFullYear(), EndDate.getMonth(), EndDate.getDate());
        const end = Date.UTC(StartDate.getFullYear(), StartDate.getMonth(), StartDate.getDate());
      
        // so it's safe to divide by 24 hours
        return (start - end) / oneDay;
    }

    const actionButton = () => {
        let today = new Date()
        let parseDate = task.date.split('-')
        let startDate = new Date(parseDate[0], parseDate[1]-1, parseDate[2])
        if (DaysBetween(startDate,today) >= parseInt(task.frequency) && task.status ==="active"){
            return (
                <button className="actBttn" onClick={handleClick}>{task.name} Now</button>
            )
        }
    }

    const handleClick = e =>{
        const updatedTask = {...task, status: "inactive"} 
        updateTask(updatedTask)
        history.push("/tasks/new")
    }

    const handleDelete = e => {
        deleteTask(task.id)
    }

    return (
        <div className="task-card">
            <button className="delbttn" onClick={handleDelete}>X</button>
            <h3>{task.name}</h3>
            <p>Date: {task.date}</p>
            <p>Status: {task.status}</p>
            <p>Frequency: {task.frequency} </p>
            {actionButton()}<br/>
            <Link to={`/past/${task.name.toLowerCase()}`}>See Past Events</Link>
        </div>
    )
}

export default connect(null, {updateTask, deleteTask})(TaskCard)