import {
  ADD_REMINDERS,
  CLEAR_REMINDERS,
  REMOVE_REMINDERS,
} from "../actions/types";
import { bake_cookie, read_cookie } from "sfcookies";
const reminders = (state = [], action) => {
  let reminder = null;
  state = read_cookie("reminder");
  if (action.type === ADD_REMINDERS) {
    reminder = [
      ...state,
      { id: Math.random(), text: action.text, date: action.date },
    ];
    bake_cookie("reminder", reminder);
    return reminder;
  } else if (action.type === REMOVE_REMINDERS) {
    reminder = state.filter((item) => item.id !== action.id);
    bake_cookie("reminder", reminder);
    return reminder;
  } else if (action.type === CLEAR_REMINDERS) {
    reminder = [];
    bake_cookie("reminder", reminder);
    return reminder;
  } else {
    return state;
  }
};
export default reminders;
