import { Image } from "expo-image";
import React from "react";
import useThemeStore from "../store/themeStore";
import { darkTheme, lightTheme } from "../styles/theme";

export default function Logo() {
  const currentTheme = useThemeStore((state: any) => state.theme);
  const colors = currentTheme === 'dark' ? darkTheme : lightTheme;


    if (currentTheme === 'dark'){
        return(
            <Image
                source={require("../assets/images/LogoW.svg")}
                style={{width: 300, height: 300, marginBottom: -30}}
                contentFit="contain"
                transition={1000}
                alt="Logo"
            />
        );
    } else {
        return (
            <Image
                source={require("../assets/images/LogoB.svg")}
                style={{ width: 300, height: 300, marginBottom: -30 }}
                contentFit="contain"
                transition={1000}
                alt="Logo"
            />
        );
    }
}