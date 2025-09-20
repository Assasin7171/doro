"use client";

import {Pause, Play, RotateCcw} from "lucide-react";
import {useEffect, useState} from "react";
import {useSettingsStore} from "@/stores/settingsStore";


const Timer = () => {
    const timeToCountStore = useSettingsStore((state) => state.workTime);

    const [timeToCount, setTimeToCount] = useState<number>(timeToCountStore * 60);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [isPauseActive, setIsPauseActive] = useState<boolean>(false);

    const minutes = Math.floor(timeToCount / 60);
    const seconds = timeToCount % 60;

    const setWorkTime = useSettingsStore((state) => state.setTimeToCount);
    const setBrakeTime = useSettingsStore((state) => state.setBreakTime);

    useEffect(() => {
        const workTimerCopy = localStorage.getItem("workTimer");
        const brakeTimerCopy = localStorage.getItem("brakeTimer");
        if (workTimerCopy && brakeTimerCopy) {
            const workTimer = parseInt(workTimerCopy);
            const brakeTimer = parseInt(brakeTimerCopy);

            setWorkTime(workTimer);
            setBrakeTime(brakeTimer);
        }
    }, []);

    useEffect(() => {
        if (!isRunning) return;

        const audio = new Audio("/alert_effect.mp3");
        const end = Date.now() + timeToCount * 1000;

        const interval = setInterval(() => {
            const remaining = Math.max(0, Math.round((end - Date.now()) / 1000));
            setTimeToCount(remaining);

            if (remaining === 0) {
                clearInterval(interval);
                setIsRunning(false);
                audio.play();

            }
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning, timeToCount]);

    const handleOnStart = () => {
        if (isPauseActive) {
            setIsRunning(true);
            setIsPauseActive(false);
            return;
        } else {
            setIsRunning(true);
            return;
        }
    }

    const handleTimerReset = () => {
        setTimeToCount(timeToCountStore * 60);
        setIsRunning(false);
    }

    const handleTimerPause = () => {
        setIsPauseActive(true)
        setIsRunning(false)
    };

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
                    onClick={() => handleTimerPause()}
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