import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addReminder, deleteReminder } from '../actions';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }
  
  addReminder(){
    this.props.addReminder(this.state.text);
  }
  
  deleteReminder(id){
    this.props.deleteReminder(id);
  }
  
  renderReminders(){
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-4">
        {
          reminders.map(reminder => {
            return (
              <li key={reminder.id} className="list-group-item list-item">
                <div className="list-item">{reminder.text}</div>
                <div
                  className="list-item delete-button"
                  onClick={() => this.deleteReminder(reminder.id)}>
                  &#x2715;
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }
  
  render(){
    return (
      <div className="App">
        <div className="col-md-6 col-md-offset-3">
          <div className="title">
            <h1>RemindMe</h1>
          </div>
          <div className="row">
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
              <br />
              <br />
              { this.renderReminders() }
            </div>
          </div>
        </div>
      </div>
      )
    }
  }
  
  // Bind the action creator to the application
  function mapDispatchToProps(dispatch){
    return bindActionCreators({addReminder, deleteReminder}, dispatch);
  }
  //mapStateToProps so we can recognize the redux state in this component
  function mapStateToProps(state){
    return {
      reminders: state
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(App);