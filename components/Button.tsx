import React from "react";
import { Pressable, PressableProps, StyleSheet, ViewStyle } from "react-native";
import useThemeStore from "../store/themeStore";
import { typography } from "../styles";
import { darkTheme, lightTheme } from "../styles/theme";
import Text from "./Text";

type ButtonProps = PressableProps & {
  title: string;
  style?: object;
};


export default function Button({ title, style, ...props }: ButtonProps) {

  const currentTheme = useThemeStore((state:any) => state.theme);
  const colors = currentTheme === 'dark' ? darkTheme : lightTheme;

  const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderWidth: 1,
    borderColor: colors.onBackground,
    borderRadius: 20,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  text: {
    color: colors.onPrimary,
    fontSize: typography.button.fontSize,
    fontWeight: 'bold',
    lineHeight: typography.button.lineHeight,
  },
  });

  return (
    <Pressable 
        style ={({pressed}) =>
        [
            styles.button,
            style as ViewStyle,
            pressed && {opacity: 0.5},
        ]}
        {...props}> 
      <Text style={[styles.text]}>{title}</Text>
    </Pressable>
  );
}