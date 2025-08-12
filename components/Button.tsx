import { Pressable, Text, StyleSheet, PressableProps, ViewStyle } from "react-native";
import {typography} from "../styles";
import  useThemeStore  from "../store/themeStore";
import React from "react";
import { lightTheme, darkTheme } from "../styles/theme";

type ButtonProps = PressableProps & {
  title: string;
  style?: object;
};


export default function Button({ title, style, ...props }: ButtonProps) {

  const currentTheme = useThemeStore((state:any) => state.theme);
  const colors = currentTheme === 'dark' ? darkTheme : lightTheme;

  const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 20,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  text: {
    color: colors.onPrimary,
    fontSize: typography.button.fontSize,
    fontWeight: '400',
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