import { ADD_REMINDER } from '../constants';

export const addReminder = (text) => {
  const action = {
    type: ADD_REMINDER,
    text: text
  };
  console.log('action in AddReminder', action);
  return action;
};