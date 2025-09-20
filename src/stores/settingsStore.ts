import {create} from "zustand/react";


type SettingsStoreType = {
    firstRun: boolean,
    workTime: number,
    brakeTime: number,
    setTimeToCount: (timeToCount: number) => void,
    setBreakTime: (timeToCount: number) => void,
}

const useSettingsStore = create<SettingsStoreType>((set) => ({
    firstRun: true,
    workTime: 25,
    brakeTime: 5,
    setTimeToCount: (setTimeToCount: number) => set({workTime: setTimeToCount}),
    setBreakTime: (setBreakTime: number) => set({brakeTime: setBreakTime}),
}))

export {useSettingsStore};