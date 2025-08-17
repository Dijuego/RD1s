import React from "react";
import { Text as RNText, StyleSheet, TextProps } from "react-native";
import useThemeStore from "../store/themeStore";
import { darkTheme, lightTheme } from "../styles/theme";

type Props = React.PropsWithChildren<TextProps>;

export default function Text({ style, children, ...props }: Props) {
    const currentTheme = useThemeStore((state: any) => state.theme);
    const colors = currentTheme === 'dark' ? darkTheme : lightTheme;

    const styles = StyleSheet.create({
        text: {
            color: colors.onBackground,
        },
    });

    return (
        <RNText {...props} style={[styles.text, style]}>
            {children}
        </RNText>
    );
}