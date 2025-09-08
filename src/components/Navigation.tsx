import {Settings, User} from "lucide-react";

const Navigation = () => {
    return (
        <nav className="my-3">
            <div className="flex text-md justify-between items-center w-full">
                <span className={"text-cyan-400 font-semibold font-mono"}>Doro - Pomodoro app</span>

                <div className="flex gap-5 bg-gray-700 text-white px-4 py-2 rounded-sm text-sm">
                    <button
                        className={"bg-gray-600 px-2 py-1 rounded-md border-1 border-gray-500 hover:bg-gray-700 hover:cursor-pointer hover:border-gray-500 flex justify-center items-center gap-2"}>{
                        <Settings className={"w-5 h-5"}/>} Settings
                    </button>
                    <button
                        className={"bg-gray-600 px-2 py-1 rounded-md border-1 border-gray-500 hover:bg-gray-700 hover:cursor-pointer hover:border-gray-500 flex justify-center items-center gap-2"}>{
                        <User className={"w-5 h-5"}/>} Sign In
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;