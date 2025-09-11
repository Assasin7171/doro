import {TaskType} from "@/types/types";
import {CircleCheck, CircleX} from "lucide-react";

const Task = ({task, completeTask}: { task: TaskType, completeTask: () => void }) => {
    return (
        <div className={"flex justify-between pb-2 border-b text-lg border-gray-400"}>
            <span className={"font-mono text-gray-100"}>{task.body}</span>
            {/*<Circle-check> className={`font-semibold border-1 px-2 py-1 rounded-sm cursor-pointer items-center text-shadow-md  ${task.isComplete ? "text-green-600 text-shadow-green-900" : "text-red-600 text-shadow-red-500/20"}`}>*/}

            {/*</Circle-check>*/}

            <button onClick={() => completeTask}>{task.isComplete ?
                <CircleCheck className={"h-6 w-6 flex items-center text-green-600"}/> :
                <CircleX className={"h-6 w-6 flex items-center text-red-600"}/>}</button>

        </div>
    )
}

export default Task;