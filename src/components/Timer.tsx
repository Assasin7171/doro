"use client";

import {Pause, Play, RotateCcw} from "lucide-react";
import {useEffect, useState} from "react";
import {useSettingsStore} from "@/stores/settingsStore";


const Timer = () => {
    const defaultTimeToCount = useSettingsStore((state) => state.defaultTimeToCount);
    const timeToCountStore = useSettingsStore((state) => state.workTime);

    const [timeToCount, setTimeToCount] = useState<number>(timeToCountStore != 0 ? (timeToCountStore * 60) : (defaultTimeToCount * 60));
    const [isRunning, setIsRunning] = useState<boolean>(false);

    const minutes = Math.floor(timeToCount / 60);
    const seconds = timeToCount % 60;

    useEffect(() => {
        if (!isRunning) return;

        const audio = new Audio("/alert_effect.mp3");

        const start = Date.now();
        const end = start + timeToCount * 1000;

        const interval = setInterval(() => {
            const now = Date.now();
            const remaining = Math.max(0, Math.round((end - now) / 1000));
            setTimeToCount(remaining);

            console.log("test " + remaining);
            if (remaining === 0) {

                setIsRunning(false);

                audio.play().then(() => setTimeToCount(defaultTimeToCount));
            }

        }, 1000);


        return () => {
            clearInterval(interval);
        }
    }, [isRunning]);

    const handleOnStart = () => {
        if (timeToCount >= defaultTimeToCount) {
            setTimeToCount(defaultTimeToCount);
        }
        setIsRunning(true);

    }

    const handleTimerReset = () => {
        setTimeToCount(defaultTimeToCount);
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