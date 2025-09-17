import {TaskType} from "@/types/types";
import {CircleCheck, CircleX} from "lucide-react";

const Task = ({task, completeTask}: { task: TaskType, completeTask: (id:number) => void }) => {
    return (
        <div className={"flex justify-between pb-2 border-b text-lg border-gray-400"}>
            <span className={"font-mono text-gray-100"}>{task.body}</span>
            
            <button className={"hover:cursor-pointer"} onClick={() => completeTask(task.id)}>{task.isComplete ?
                <CircleCheck className={"h-6 w-6 flex items-center text-green-600"}/> :
                <CircleX className={"h-6 w-6 flex items-center text-red-600"}/>}</button>

        </div>
    )
}

export default Task;