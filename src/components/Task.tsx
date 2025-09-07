import {TaskType} from "@/types/types";

const Task = ({task} : {task: TaskType}) => {
    return (
        <div className={"flex justify-between"}>
            <span className={"font-mono text-gray-100"}>{task.body}</span>
            <span className={"font-semibold text-gray-100"}>{task.isComplete ? "True" : "False"}</span>
        </div>
    )    
}

export default Task;