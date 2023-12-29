import React from 'react';

interface Props extends React.PropsWithChildren {
    id?: string;
    textTask: string;
    onDeleteClick: React.MouseEventHandler;
}

const Task: React.FC<Props> = ({
                                   id,
                                   textTask,
                                   onDeleteClick
                               }) => {
    return (
        <div className="task">
            <div>
                <span>{textTask}{id}</span>
                <button type="button" onClick={onDeleteClick} className="del-btn">Delete</button>
            </div>
        </div>
    );
};

export default Task;