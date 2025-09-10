import {TasksType} from "@/types/types";
import Task from "@/components/Task";
import {PlusIcon} from "lucide-react";

const tasks : TasksType = [
    {
        id: 0,
        body: "Pouczyć się TS",
        isComplete: false,
    },{
        id: 1,
        body: "Nauczyć się Next.js",
        isComplete: false,
    },{
        id: 2,
        body: "Pouczyć się C#",
        isComplete: true,
    },
]

const Tasks = () => {
    return (
        <div className={"p-3 flex gap-5 flex-col"}>
            <div className="flex flex-col gap-3">
                <h3 className={"text-xl text-center font-mono"}>Add task</h3>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
                    <input type="text" className={"border-1 border-gray-200 text-md rounded-sm px-2 py-1"}/>
                    <button
                        className={"bg-gray-600 px-2 py-1 rounded-md border-1 border-gray-500 hover:bg-gray-700 hover:cursor-pointer hover:border-gray-500 flex justify-center items-center gap-1"}>
                        {<PlusIcon className="w-5 h-5"/> }
                        Add task
                    </button>
                </div>
            </div>
            
            <hr className={"border-1 border-gray-200"}/>
            
            <div className="flex flex-col gap-3">
                <h4 className={"text-xl text-center font-mono"}>Task list</h4>
                <div className="flex justify-between text-lg border-b-1">
                    <span>Title</span>
                    <span>Is completed</span>
                </div>
                {tasks.map((task) => (
                    <Task key={task.id} task={task} />
                ))}
            </div>
        </div>
    )
}

export default Tasks;