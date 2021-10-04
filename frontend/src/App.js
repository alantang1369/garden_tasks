import React, { Component } from 'react'
import TasksContainer from './containers/TasksContainer'
import TasksForm from './containers/TasksForm'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/tasks" component={TasksContainer}/>
            <Route exact path="/tasks/new"component={TasksForm}/>
            {/* <Route exact path="/tasks/history" coponent={TaskHistory} */}

          </Switch>
        </Router>
      </div>
    )
  }
}
