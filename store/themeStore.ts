import {create} from "zustand";
import { Appearance} from "react-native";

const useThemeStore = create((set) => ({
    theme: Appearance.getColorScheme() || 'light',
    setTheme: (newtheme: any) => set({ theme: newtheme }),
}));

export default useThemeStore;