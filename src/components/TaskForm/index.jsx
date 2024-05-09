// TaskForm.js
import React, { useState } from 'react';
import Task from '../Task';
import './index.css';

function TaskForm({ tasks, setTasks }) {
  const [formData, setFormData] = useState({ title: '', description: '', priority: '', dueDate: '' });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: tasks.length + 1,
      completed: false,
      ...formData
    };
    setTasks([newTask, ...tasks]); 
    setFormData({ title: '', description: '', priority: '', dueDate: '' }); 
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="Task-form-con m-2  col-md-4">
      <h2 className='text-center mb-5 add-task-name'>Add Task</h2>
      <form onSubmit={handleAddTask} className='form-con'>
        <input className='mb-3 p-2 ml-2' type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="Title" required />
        <textarea className='mb-3 p-1 ml-2'  name="description" value={formData.description} onChange={handleInputChange} placeholder="Description"></textarea>
        <input className='mb-4 p-2 ml-2'  type="text" name="priority" value={formData.priority} onChange={handleInputChange} placeholder="Priority" />
        <input className='mb-4 p-2 ml-2'  type="date" name="dueDate" value={formData.dueDate} onChange={handleInputChange} placeholder="Due Date" />
        <div className='text-center '>
        <button className='addtask-btn' type="submit ">Add Task</button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
