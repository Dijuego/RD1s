import { StyleSheet, Text, TextInput } from "react-native";
import { typography } from "../styles";
import useThemeStore from "../store/themeStore";
import { lightTheme, darkTheme } from "../styles/theme";
import React from "react";

type TextInputProps = {
  style?: object;
  placeholder?: string;
  secureTextEntry?: boolean;
};

export default function themedTextInput({style, placeholder,secureTextEntry, ...props}:TextInputProps){
    const currentTheme = useThemeStore((state: any) => state.theme);
    const colors = currentTheme === 'dark' ? darkTheme : lightTheme;

    const styles = StyleSheet.create({
        TextInput: {
            backgroundColor: colors.secondaryBackground,
            color: colors.onBackground,
            padding: 10,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: colors.primary,
            fontSize: typography.text.fontSize,
        },
    });

    return (
        <TextInput
            style={[styles.TextInput, style]}
            placeholder={placeholder}
            placeholderTextColor={colors.onBackground}
            secureTextEntry={secureTextEntry}
            {...props}
        />
    );
}