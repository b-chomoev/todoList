import React from 'react';

interface TaskProps extends React.PropsWithChildren {
    textTask: string;
    onChangeText: React.ChangeEventHandler<HTMLInputElement>;
    onAddClick: React.MouseEventHandler;
}

const AddTaskForm: React.FC<TaskProps> = ({
                                              textTask,
                                              onChangeText,
                                              onAddClick
                                          }) => {
    return (
        <div className="AddTaskForm">
            <h1>ToDo List</h1>
            <div>
                <form>
                    <input type="text" className="input" onChange={onChangeText} value={textTask} placeholder="Add new task"/>
                </form>
            </div>
            <div>
                <button type="submit" onClick={onAddClick} className="add-btn">Add task</button>
            </div>
        </div>
    );
};

export default AddTaskForm;