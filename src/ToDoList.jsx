import React, {useState} from "react";

function ToDoList () {
    const [todolist, settodolist] = useState([]);

    const addTask = () => {
        const date = new Date().toLocaleString();
        const taskText = document.getElementById('addTask').value;
        document.getElementById('addTask').value = '';
        if(taskText != ''){
            settodolist(t => [...t, {taskdate: date, task: taskText, done: false}]);
        }
    }
    const removeTask = (index) => {
        const updatedTasks = todolist.filter((_,i) => i !== index);
        settodolist(updatedTasks);
    }
    const handleDone = (index) => {
        const newTaskList = todolist.map((item, i) => i==index ? item.done?{...item, done: false}:{...item, done: true} : item);
        settodolist(t => newTaskList);
    }   
    return(<div className="todo-list-wrap">
        <div className="container">
            <div className="add-task-form">
                <input type="text" placeholder="Add a new task" id="addTask" />
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="todo-list-table">
                <ul>
                    {todolist.length?todolist.sort((a, b) => a.done - b.done).map((taskItem, index) => 
                                                        <li key={index}>
                                                            <span>
                                                                <input type="checkbox" checked={taskItem.done && true} onChange={() => handleDone(index)} />
                                                            </span>
                                                            <span className="task-wrap">
                                                                <span>{taskItem.taskdate}</span>
                                                                <span className="task-title">{taskItem.task}</span>
                                                            </span>
                                                            <button onClick={() => removeTask(index)}>Remove</button>
                                                        </li>                    
                    ):<li>No Task Added</li>}
                </ul>
            </div>
        </div>
    </div>);
}

export default ToDoList