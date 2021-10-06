import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchTasks} from '../actions/TaskActions'
import TasksList from '../components/TasksList'
import { Link } from 'react-router-dom'
class TasksContainer extends Component {

    componentDidMount(){
        this.props.fetchTasks()
    }
    render() {
        return (
            <div>
                <Link to="/tasks/new">
                    <div id="add-task">
                        <h1>ADD TASK</h1>
                    </div>
                </Link>
                <TasksList history={this.props.history}/>
            </div>
        )
    }
}

export default connect(null, {fetchTasks})(TasksContainer)
