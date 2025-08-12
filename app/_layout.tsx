import React, {use, useEffect} from "react";
import { Stack } from "expo-router";
import useThemeStore from "../store/themeStore";
import { Appearance } from "react-native";

export default function RootLayout() {
  const setTheme = useThemeStore((state: any) => state.setTheme);

  useEffect(() => {
    const colorScheme = Appearance.getColorScheme();
    setTheme(colorScheme);

    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme);
    });

    return () => {
      subscription.remove();
    };
  }, [setTheme]);

  return(
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="index"/>
      <Stack.Screen name="(auth)"/>
      <Stack.Screen name="(app)" />
    </Stack>
  );
}
