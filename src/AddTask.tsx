import React from "react";
import { useState } from "react";

const AddTask = ({ onAddTask }) => {
    const [input, setInput] = useState("");
    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (input === "") return;
                    onAddTask(input);
                    setInput("");
                }}
            >
                <input
                    type="text"
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                    value={input}
                />
                <button type="submit">Add</button>
            </form>
        </>
    );
};

export default AddTask;
