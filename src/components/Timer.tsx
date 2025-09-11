"use client";

import {Pause, Play, RotateCcw} from "lucide-react";
import {useEffect, useState} from "react";

const Timer = () => {
    const defaultTimeLeft = (25 * 60);

    const [timeLeft, setTimeLeft] = useState<number>(defaultTimeLeft);
    const [isRunning, setIsRunning] = useState<boolean>(false);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    useEffect(() => {
        if (!isRunning) return;

        const start = Date.now();
        const end = start + timeLeft * 1000;

        const interval = setInterval(() => {
            const now = Date.now();
            const remaining = Math.max(0, Math.round((end - now) / 1000));
            setTimeLeft(remaining);
        }, 500);

        return () => {
            clearInterval(interval);
        }
    }, [isRunning]);

    const handleOnStart = () => {
        if (timeLeft >= defaultTimeLeft) {
            setTimeLeft(defaultTimeLeft);
        }
        setIsRunning(true);

    }

    const handleTimerReset = () => {
        setTimeLeft(defaultTimeLeft);
        setIsRunning(false);
    }


    return (
        <div className="bg-gray-500 flex flex-col items-center justify-center gap-5 px-15 py-5 shadow-lg rounded-sm">
            <div
                className="w-50 h-50  rounded-full border-4 text-3xl font-mono border-red-500 flex items-center justify-center">
                {`${minutes}:${seconds.toString().padStart(2, "0")}`}
            </div>

            <div
                className="text-md sm:text-lg px-4 py-2 border-2 border-gray-600 rounded-md flex flex-col sm:flex-row gap-1">
                <button
                    className={"bg-gray-600 px-2 py-1 rounded-md border-1 border-gray-500 hover:bg-gray-700 hover:cursor-pointer hover:border-gray-500 flex justify-center items-center gap-2 disabled:bg-gray-400"}
                    onClick={() => handleOnStart()}
                    disabled={isRunning}>
                    {<Play className={"w-5 h-5"}/>}
                    Start
                </button>
                <button
                    className={"bg-gray-600 px-2 py-1 rounded-md border-1 border-gray-500 hover:bg-gray-700 hover:cursor-pointer hover:border-gray-500 flex justify-center items-center gap-2 disabled:bg-gray-400"}
                    onClick={() => setIsRunning(false)}
                    disabled={!isRunning}>
                    <Pause className={"w-5 h-5"}/>
                    Pause
                </button>
                <button
                    className={"bg-gray-600 px-2 py-1 rounded-md border-1 border-gray-500 hover:bg-gray-700 hover:cursor-pointer hover:border-gray-500 flex justify-center items-center gap-2 disabled:bg-gray-400"}
                    onClick={() => handleTimerReset()}>
                    <RotateCcw className={"w-5 h-5"}/>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Timer;