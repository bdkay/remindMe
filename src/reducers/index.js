import { ADD_REMINDER, DELETE_REMINDER } from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies';

const reminder = (action) => {
  let { text, dueDate } = action;
  return {
    id: Math.random(),
    text,
    dueDate
  }
};

const removeById = (state = [], id) => {
  // Filter out any ids that match our past id, one reminder at a time
  // id does not match any past ids, therefore we keep it
  const reminders = state.filter(reminder => reminder.id !== id);
  console.log('new reduced reminders', reminders);
  return reminders;
};

// Reducer: takes state and action, returns new state
 const reminders = (state = [], action) => {
   let reminders = null;
   state = read_cookie('reminders');
   switch(action.type){
     case ADD_REMINDER:
       reminders = [...state, reminder(action)];
       // We want to make the cookie when a reminder is added and add it to the browser
       bake_cookie('reminders', reminders);
       // Read any cookie we've previously saved
       return reminders;
     case DELETE_REMINDER:
       reminders = removeById(state, action.id);
       // Delete the cookie whenever we delete the reminder
       bake_cookie('reminders', reminders);
       return reminders;
     default:
       return state;
   }
 };

export default reminders;