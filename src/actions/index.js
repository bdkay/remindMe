import { ADD_REMINDER } from '../constants';

//Action creator
export addReminder = (text) => {
  const action = {
    type: ADD_REMINDER,
    text: text
  };
  console.log('action in AddReminder', action);
  return action;
};