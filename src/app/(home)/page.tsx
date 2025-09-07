import Tasks from "@/components/Tasks";
import {Pause, Play, RotateCcw} from "lucide-react";

export default function Home() {
    return (
        <main>
            <div className="flex justify-center items-center flex-col gap-7">
                <div className="bg-gray-500 flex flex-col items-center justify-center gap-5 p-5 w-150 shadow-lg rounded-sm">
                    <div
                        className="w-50 h-50  rounded-full border-4 text-3xl font-mono border-red-500 flex items-center justify-center">
                        25:00
                    </div>

                    <div className="text-lg px-4 py-2 border-2 border-gray-600 rounded-md flex gap-2">
                        <button
                            className={"bg-gray-600 px-2 py-1 rounded-md border-1 border-gray-500 hover:bg-gray-700 hover:cursor-pointer hover:border-gray-500 flex justify-center items-center gap-2"}>
                            {<Play className={"w-5 h-5"}/>}
                            Start
                        </button>
                        <button
                            className={"bg-gray-600 px-2 py-1 rounded-md border-1 border-gray-500 hover:bg-gray-700 hover:cursor-pointer hover:border-gray-500 flex justify-center items-center gap-2"}>
                            <Pause className={"w-5 h-5"}/>
                            Pause
                        </button>
                        <button
                            className={"bg-gray-600 px-2 py-1 rounded-md border-1 border-gray-500 hover:bg-gray-700 hover:cursor-pointer hover:border-gray-500 flex justify-center items-center gap-2"}>
                            <RotateCcw className={"w-5 h-5"}/>
                            Reset
                        </button>
                    </div>
                </div>

                <div className="bg-gray-500 w-150 flex flex-col rounded-sm">
                    <Tasks />
                </div>
            </div>
        </main>
    );
}
