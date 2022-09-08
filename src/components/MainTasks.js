import React from 'react';
import '../css/MainTasks.css';
import Logo from './Logo';
import TasksList from './TasksList';

function MainTasks() {
  return (
    <div className='app-tasks'>
      <Logo />
      <div className='tasks-list-main'>
        <h1>My Tasks</h1>
        <TasksList />
      </div>
    </div>
  );
}

export default MainTasks;
