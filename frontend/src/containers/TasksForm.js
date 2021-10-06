
import React, { Component } from 'react'
import {addTask} from '../actions/TaskActions'
import {connect} from 'react-redux'

class TasksForm extends Component {

    state={
        name: '',
        date: '',
        frequency: '',
        status: '',
    }

    handleChange = e =>{
        const {name,value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
        this.props.addTask(this.state)
        this.props.history.push("/tasks")
    }
    render() {
        return (
            <div className="add-task-form">
                <form onSubmit={this.handleSubmit}>
                    <label id="name">Name: </label>
                    <input 
                        type="text"
                        name="name"
                        id="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                    /><br/>
                    <label id="date">Date: </label>
                    <input 
                        type="date"
                        name="date"
                        id="date"
                        onChange={this.handleChange}
                        value={this.state.date}
                    /><br/>
                    <label id="frequency">Frequency: </label>
                    <input 
                        type="text"
                        name="frequency"
                        id="frequency"
                        onChange={this.handleChange}
                        value={this.state.frequency}
                    /><br/>
                    <label id="status">Status: </label>
                    {/* <input 
                        type="text"
                        name="status"
                        id="status"
                        onChange={this.handleChange}
                        value={this.state.status}/> */}
                    < select name="status" id="status" onChange={this.handleChange}>
                        <option value=""></option>
                        <option value="active" >Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                    <br/>
                    <button type="submit">Create Task</button>
                </form>
                
            </div>
        )
    }
}

export default connect(null, {addTask}) (TasksForm)
