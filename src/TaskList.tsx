import React, { FC, useState } from "react";

type task = { id: number; text: string; done: boolean };
interface TaskListProps {
    tasks: task[];
    onChangeTask: (task: task) => void;
    onDeleteTask: (taskId: number) => void;
}

const TaskList: FC<TaskListProps> = ({ tasks, onChangeTask, onDeleteTask }) => {
    const [editing, setEditing] = useState<Record<number, string>>({});

    return (
        <>
            {tasks.map((t) => {
                return (
                    <div key={t.id}>
                        <label>
                            <input type="checkbox" defaultChecked={t.done} />
                            {(t.id in editing && (
                                <input
                                    type="text"
                                    value={editing[t.id]}
                                    onChange={(e) => {
                                        setEditing({
                                            ...editing,
                                            [t.id]: e.target.value,
                                        });
                                    }}
                                />
                            )) ||
                                t.text}
                        </label>

                        <button
                            onClick={() => {
                                if (t.id in editing) {
                                    const { [t.id]: _, ...remaining } = editing;
                                    setEditing(remaining);
                                    const updatedTask = {
                                        ...t,
                                        text: editing[t.id],
                                    };
                                    onChangeTask(updatedTask);
                                } else {
                                    setEditing({ ...editing, [t.id]: t.text });
                                }
                            }}
                        >
                            {t.id in editing ? "Save" : "Edit"}
                        </button>
                        <button onClick={() => onDeleteTask(t.id)}>
                            Delete
                        </button>
                    </div>
                );
            })}
        </>
    );
};

export default TaskList;
