import { ADD_REMINDERS, REMOVE_REMINDERS, CLEAR_REMINDERS } from "./types";
export const add_Reminder = (text, date) => {
  const action = {
    type: ADD_REMINDERS,
    text,
    date,
  };
  return action;
};
export const remove_Reminder = (id) => {
  const action = {
    type: REMOVE_REMINDERS,
    id,
  };
  return action;
};
export const clear_Reminder = () => {
  const action = {
    type: CLEAR_REMINDERS,
  };
  return action;
};
