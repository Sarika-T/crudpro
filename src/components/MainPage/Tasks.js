import React, { useState } from 'react';
import BasicModal from '../common/ModalContainer';


export default function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: '', description: '', status: 'No Option' });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingTask, setEditingTask] = useState(null);


    const handleAddTask = (data) => {
        setTasks([...tasks, { ...data, id: Date.now() }]);
        setNewTask({ title: '', description: '', status: 'No Option' });
        setIsModalOpen(false);
    };
    
    
    const handleUpdateTask = (updatedTask) => {
        setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    };
    
    const handleEditTask = (task) => {
        setEditingTask(task);
        setIsModalOpen(true);
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="tasks-container">
            <h2>Tasks</h2>
            {tasks.length > 0 && 
                <span className='add-tasks'>
                    <button className="add-task-button" onClick={() => setIsModalOpen(true)}>Add Task</button>
                </span>
            }
            <div className={`task-list ${tasks.length === 0 ? 'flex' : ''}`}>
                {tasks.length === 0 ? (
                    <div className="no-tasks">
                        <p>No tasks available. Would you like to create one?</p>
                        <button className="add-task-button" onClick={() => setIsModalOpen(true)}>Add Task</button>
                    </div>
                ) : (
                    tasks.map((task) => (
                        <div key={task.id} className="task-card">
                            <span className='card-title'>{task.title}</span>
                            <span className='card-des'>{task.description}</span>
                            <span className='card-status'> Status: <p className='status-text'>{task.status}</p></span>
                            <div className="task-buttons">
                                <button onClick={() => handleEditTask(task)}>Edit</button>
                                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {isModalOpen && 
                <BasicModal  
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    handleAddTask={handleAddTask}
                    handleUpdateTask={handleUpdateTask}
                    newTask={newTask}
                    setNewTask={setNewTask}
                    editingTask={editingTask}
                />}
        </div>
    );
}
