import React, {Component} from 'react';
import { Table, Button } from 'antd';
import CreateTask from './CreateTask';

class MyTasks extends Component {
  state = {
    visible: false,
    taskList: []
  };

  componentDidMount() {
    // get task list
  }

  handleOpenModal = (id) => {
    this.setState({ visible: true });
  };

  handleEditTask = (params) => {
   // post edit 
    this.handleCloseModal();
  };

  handleCloseModal = () => {
    this.setState({ visible: false });
  };

  handleDeleteTask = (id) => {
    // get delete/id
  };

  render() {

    const columns = [{
        title: 'Type',
        dataIndex: 'type',
        key: 'type'
      },
      {
        title: 'Content',
        dataIndex: 'content',
        key: 'content'
      },
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date'
      },
      {
        title: 'Actions',
        dateIndex: '',
        key: '',
        render: (record) => (
          <div>
            <Button onClick={() => this.handleOpenModal(record.id)}>Edit</Button>
            <Button type={'danger'} onClick={() => this.handleDeleteTask(record.id)}>Delete</Button>
          </div>
        )
      }];

    const { taskList } = this.props;
    const { visible, id } = this.state;


    return (
      <div style={{ margin: '20px 20px 20px 320px' }}>
        <div style={{ marginLeft: '40%', marginBottom: '10px', fontSize: '20px' }}>Task List</div>
        <Table columns={columns} dataSource={taskList} />
        <CreateTask visible={visible} id={id} onCancel={this.handleCloseModal} onEditTask={this.handleEditTask} editable={true} />
      </div>
    );
  }
}

export default MyTasks;
