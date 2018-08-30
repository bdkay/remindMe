import { ADD_REMINDER, DELETE_REMINDER } from '../constants';

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
   switch(action.type){
     case ADD_REMINDER:
       reminders = [...state, reminder(action)];
       console.log('reminders as state', reminders);
       return reminders;
     case DELETE_REMINDER:
       reminders = removeById(state, action.id);
       return reminders;
     default:
       return state;
   }
 };

export default reminders;