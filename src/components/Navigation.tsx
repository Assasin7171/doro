"use client";


import {HomeIcon, Settings, User} from "lucide-react";
import {useRouter} from "next/navigation";

const Navigation = () => {
    const router = useRouter();
    
    return (
        <nav className="my-3">
            <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row text-xl sm:text-md justify-between items-center w-full">
                <h1 className={"text-cyan-400 font-semibold font-mono"}>Doro - Pomodoro app</h1>

                <div className="flex flex-row gap-5 bg-gray-700 text-white px-4 py-2 rounded-sm text-sm">
                    <button
                        className={"bg-gray-600 px-2 py-1 rounded-md border-1 border-gray-500 hover:bg-gray-700 hover:cursor-pointer hover:border-gray-500 flex justify-center items-center gap-2"}
                        onClick={()=> router.push("/")}>{
                        <HomeIcon className={"w-5 h-5"}/>} Home
                    </button>
                    <button
                        className={"bg-gray-600 px-2 py-1 rounded-md border-1 border-gray-500 hover:bg-gray-700 hover:cursor-pointer hover:border-gray-500 flex justify-center items-center gap-2"}
                        onClick={()=> router.push("/settings")}>{
                        <Settings className={"w-5 h-5"}/>} Settings
                    </button>
                    <button
                        className={"bg-gray-600 px-2 py-1 rounded-md border-1 border-gray-500 hover:bg-gray-700 hover:cursor-pointer hover:border-gray-500 flex justify-center items-center gap-2"}
                        onClick={()=> router.push("/login")}>{
                        <User className={"w-5 h-5"}/>} Sign In
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;