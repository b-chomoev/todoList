import React, {useState} from 'react';
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import Task from "./Task/Task";
import './App.css';

const App = () => {
    const [tasks, setTasks] = useState([
        {textTask: 'Wash up', id: (new Date().getTime().toString())},
        {textTask: 'Do some exercises', id: (new Date().getTime().toString())},
        {textTask: 'Have breakfast', id: (new Date().getTime().toString())},
    ]);

    const [input, setInput] = useState("");

    const changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const addTodo = () => {
        const newTodo = {
            textTask: input,
            id: (new Date().getTime().toString()),
        };
        setTasks([...tasks, newTodo]);
        setInput('');
    };

    const deleteTask = (id: string) => {
        const tasksCopy = [...tasks];
        const index = tasks.findIndex(task => task.id === id);
        tasksCopy.splice(index, 1);
        setTasks(tasksCopy);
    };

    const taskList = tasks.map((task) => {
        return (
            <Task
                key={task.id}
                textTask={task.textTask}
                onDeleteClick={() => deleteTask(task.id)}
            />
        );
    });

    return (
        <div className="App">
            <AddTaskForm
                textTask={input}
                onChangeText={changeText}
                onAddClick={addTodo}
            />
            {taskList}
        </div>
    );
};

export default App;