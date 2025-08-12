import { StyleSheet} from "react-native";
import { typography } from "../styles";
import useThemeStore from "../store/themeStore";
import { lightTheme, darkTheme } from "../styles/theme";
import React from "react";
import { View as RNView, ViewProps} from "react-native";

type Props = React.PropsWithChildren<ViewProps>;

export default function View({ style, children, ...props }: Props) {
    const currentTheme = useThemeStore((state: any) => state.theme);
    const colors = currentTheme === 'dark' ? darkTheme : lightTheme;
    
    const styles = StyleSheet.create({
        view: {
            backgroundColor: colors.background,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            color: colors.onBackground,
        },
    });
    
    return (
        <RNView {...props} style={[styles.view, style]}>
            {children}
        </RNView>
    );
}
