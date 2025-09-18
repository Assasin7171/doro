"use client";

import {useSettingsStore} from "@/stores/settingsStore";
import {useState} from "react";

const Page = () => {
    const workTime: number = useSettingsStore((state) => state.workTime);
    const brakeTime: number = useSettingsStore((state) => state.brakeTime);
    const setWorkTime = useSettingsStore((state) => state.setTimeToCount);
    const setBrakeTime = useSettingsStore((state) => state.setBreakTime);

    const [workTimer, setWorkTimer] = useState<number>(workTime);
    const [brakeTimer, setBrakeTimer] = useState<number>(brakeTime);

    const handleSetTimer = (timer: number) => {
        setWorkTimer(timer);


    }

    const handleSetBreakTime = (breakTime: number) => {
        setBrakeTimer(breakTime);


    }

    const saveTimers = () => {
        setWorkTime(workTimer);
        setBrakeTime(brakeTimer);
        console.log("Save timers");
    };
    return (
        <div className={"mx-auto flex flex-col gap-4"}>
            <h1 className="text-3xl font-bold text-center">
                Timer Settings
            </h1>
            <div
                className="flex flex-col gap-3 w-full border border-gray-200 rounded-md px-4 py-3 shadow-sm shadow-red-900">
                <label className="font-medium">Work time in minutes: {workTimer}</label>
                <input
                    type="range"
                    min="1"
                    max="120"
                    value={workTimer}
                    onChange={(e) => handleSetTimer(Number(e.target.value))}
                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
            </div>

            <div
                className="flex flex-col gap-3 w-full border border-gray-200 rounded-md px-4 py-3 shadow-sm shadow-red-900">
                <label className="font-medium">Brake time in minutes: {brakeTimer}</label>
                <input
                    type="range"
                    min="1"
                    max="60"
                    value={brakeTimer}
                    onChange={(e) => handleSetBreakTime(Number(e.target.value))}
                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
            </div>

            <div className="flex justify-center gap-3">
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                        onClick={() => saveTimers()}>Save
                </button>
                <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded">Reset</button>
            </div>

            <hr/>

            <div className="text-center font-mono">
                <p className={"text-xl"}>{`Actual work time - ${workTime} -`}</p>
                <p className={"text-xl"}>{`Actual brake time - ${brakeTime} -`}</p>
            </div>

        </div>
    )
}

export default Page;