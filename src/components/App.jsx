import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addReminder } from '../actions';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }
  
  addReminder(){
    console.log('this.state', this);
    this.props.addReminder(this.state.text);
  }
  
  render(){
    console.log('this.props', this.props);
    return (
      <div className="App">
        <div className="title">
          RemindMe
        </div>
        <div className="form-inline">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="I have to..."
              onChange={event => this.setState({text: event.target.value})}
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.addReminder()}
          >
            Add Reminder
          </button>
        </div>
      </div>
      )
    }
  }
  
  // Bind the action creator to the application
  function mapDispatchToProps(dispatch){
    return bindActionCreators({addReminder}, dispatch);
  }
  //mapStateToProps so we can recognize the redux state in this component
  function mapStateToProps(state){
    console.log('state as state', state);
    return {
      reminders: state
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(App);