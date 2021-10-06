import React, { Component } from 'react'
import TasksContainer from './containers/TasksContainer'
import TasksForm from './containers/TasksForm'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import PastTask from './components/PastTask'
import Header from './components/Header'
import './App.css'
class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/home" render={(routerProps)=> <Home {...routerProps}/>}/>
            <Route path="/exit" render={()=> <h3>Thank you for using the app!</h3>}/>
            <Route exact path="/tasks" component={TasksContainer}/>
            <Route path="/tasks/new"component={TasksForm}/>
            <Route path="/past/:name" 
                  render={(routerProps)=> <PastTask {...routerProps} tasks={this.props.tasks}/>}/>

          </Switch>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(App)