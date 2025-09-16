"use client";

import {TasksType, TaskType} from "@/types/types";
import Task from "@/components/Task";
import {PlusIcon} from "lucide-react";
import React, {useState} from "react";

const Tasks = () => {
    const [tasks, setTasks] = useState<TasksType>([]);
    const [value, setValue] = useState<string>("");

    const handleAddTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const addTask = () => {
        if (!value.trim()) return;

        const newTask: TaskType = {
            id: tasks.length + 1,
            body: value,
            isComplete: false,
        }

        setTasks((prevState) => [...prevState, newTask]);
        setValue("");
    }

    const completeTask = (id: number) => {
        setTasks((prev) =>
            prev.map((t) =>
                t.id === id ? { ...t, isComplete: !t.isComplete } : t
            )
        );
        console.log("completed task", id)
    }

    return (
        <div className={"p-3 flex gap-5 flex-col"}>
            <div className="flex flex-col gap-3">
                <h3 className={"text-xl text-center font-mono"}>Add task</h3>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
                    <input type="text" value={value} onChange={(e) => handleAddTask(e)}
                           className={"border-1 border-gray-200 text-md rounded-sm px-2 py-1"}
                           onKeyDown={(e) => e.key === "Enter" && addTask()}/>
                    <button
                        className={"bg-gray-600 px-2 py-1 rounded-md border-1 border-gray-500 hover:bg-gray-700 hover:cursor-pointer hover:border-gray-500 flex justify-center items-center gap-1"}
                        onClick={() => addTask()}>
                        {<PlusIcon className="w-5 h-5"/>}
                        Add task
                    </button>
                </div>
            </div>

            <hr className={"border-1 border-gray-200"}/>

            <div className="flex flex-col gap-3">
                <h4 className={"text-xl text-center font-mono"}>Task list</h4>
                
                {tasks.map((task) => (
                    <Task key={task.id} completeTask={completeTask} task={task}/>
                ))}
            </div>

        </div>
    )
}

export default Tasks;