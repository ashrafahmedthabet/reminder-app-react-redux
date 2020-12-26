import React, { Component } from "react";
import { add_Reminder, remove_Reminder, clear_Reminder } from "./actions";
import { connect } from "react-redux";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class App extends Component {
  state = {
    text: "",
    date: new Date(),
  };
  Render_Reminders = () => {
    if (this.props.reminders) {
      return (
        <ul className="list-group">
          {this.props.reminders.map((item) => {
            return (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between mb-3 border "
              >
                <h6 className="mt-2">{item.text} </h6>
                <h6 className="mt-2">
                  {moment(new Date(item.date)).fromNow()}
                </h6>
                <button
                  onClick={() => this.props.remove_Reminder(item.id)}
                  className="btn btn-danger"
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      );
    }
  };
  render() {
    return (
      <div>
        <h3 className="text-center mt-3 mb-4 ">Reminder App</h3>
        <div className="col-md-6 mx-auto">
          <input
            onChange={(e) => this.setState({ text: e.target.value })}
            type="text"
            className="form-control mb-3"
            placeholder="I have..."
            value={this.state.text}
          />
          {/* <input
            onChange={(e) => this.setState({ date: e.target.value })}
            type="datetime-local"
            className="form-control mb-3"
          /> */}
          <DatePicker
            className="form-control mb-3"
            selected={this.state.date}
            onChange={(date) => this.setState({ date })}
            showTimeSelect
            timeFormat="HH:MM"
            dateFormat="MMMM d, yyyy h:mm aa"
            placeholderText="Enter Date.."
          />
          <button
            onClick={() => {
              this.props.add_Reminder(this.state.text, this.state.date);
              this.setState({ text: "", date: "" });
            }}
            className="btn btn-success btn-block mb-4"
          >
            Add Reminder
          </button>
          {this.Render_Reminders()}
          <button
            onClick={() => this.props.clear_Reminder()}
            className="btn btn-danger btn-block mt-2"
          >
            Clear Reminders
          </button>
        </div>
      </div>
    );
  }
}
// const mapDispatchToProps =dispatch=>{
//   return{
//   add_Reminder:()=>dispatch({add_Reminder()})
// }
// };
const mapStateToProps = (state) => {
  return {
    reminders: state,
  };
};
export default connect(mapStateToProps, {
  add_Reminder,
  remove_Reminder,
  clear_Reminder,
})(App);
