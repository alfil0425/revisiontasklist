import { useState } from "react";

function useTaskManager() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
    if (task.text.trim()) {
        task.text = task.text.trim();
        setTasks([...tasks, task]);
    }
    };

    const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    };

    const updateTask = (id, newText) => {
    const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
    };

    return { tasks, addTask, deleteTask, updateTask };
}

export default useTaskManager;
