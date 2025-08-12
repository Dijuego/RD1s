import { Pressable, Text, StyleSheet, PressableProps, ViewStyle } from "react-native";
import {colors, typography} from "../styles";
import { opacity } from "react-native-reanimated/lib/typescript/Colors";

type ButtonProps = PressableProps & {
  title: string;
  style?: object;
};

export default function Button({ title, style, ...props }: ButtonProps) {
  return (
    <Pressable 
        style ={({pressed}) =>
        [
            styles.button,
            style as ViewStyle,
            pressed && {opacity: 0.5},
        ]}
        {...props}> 
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
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
    fontWeight: '400',
    lineHeight: typography.button.lineHeight,
  },
});