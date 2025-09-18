import {create} from "zustand/react";


type SettingsStoreType = {
    workTime: number,
    brakeTime: number,
    setTimeToCount: (timeToCount: number) => void,
    setBreakTime: (timeToCount: number) => void,
}
const useSettingsStore = create<SettingsStoreType>((set) => ({
    workTime: 25 * 60,
    brakeTime: 5 * 60,
    setTimeToCount: (setTimeToCount: number) => set({workTime: setTimeToCount}),
    setBreakTime: (setBreakTime: number) => set({brakeTime: setBreakTime}),
}))

export {useSettingsStore};