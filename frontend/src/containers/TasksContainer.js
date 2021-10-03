import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchTasks} from '../actions/TaskActions'
class TasksContainer extends Component {

    componentDidMount(){
        this.props.fetchTasks()
    }
    render() {
        return (
            <div>
                TasksList
            </div>
        )
    }
}

export default connect(null, {fetchTasks})(TasksContainer)
