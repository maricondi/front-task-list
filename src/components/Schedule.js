import React, {Component} from 'react';
import { Calendar, Badge } from "antd";
import CreateTask from '../pages/CreateTask';
import moment from "moment";

class Schedule extends Component {

  state = {
    visible: false,
    taskDate: ''
  };


  handleCreateTask = (type, content, date) => {

 // post to back task list

    this.handleClose();
  };

  handleOk = (value) => {
    this.setState({ visible: true, taskDate: value });
  };

  handleClose = () => {
    this.setState({ visible: false });
  };

  dateCellRender = (value) => {
    const taskList = null;

    return (
      taskList ? taskList.map(task => {
        if(task.date === moment(value.date("DD/MM/YYYY")).format("DD/MM/YYYY")) {
          return(
            <li key={task.id}>
              <Badge status={task.type} text={task.content} />
            </li>
          );
        }
      }):[]
    );
  };

  render() {
    const { visible, taskDate, id } = this.state;

    return (
      <div style={{ margin: '20px 20px 20px 300px' }}>
        <Calendar dateCellRender={this.dateCellRender} onSelect={dateCellRender => this.handleOk(dateCellRender)} />
        <CreateTask
          id={id}
          visible={visible}
          taskDate={moment(taskDate).format("DD/MM/YYYY")}
          onCancel={this.handleClose}
          onCreateTask={this.handleCreateTask}
          editable={false}
        />
      </div>
    );
  }
}

export default Schedule;
