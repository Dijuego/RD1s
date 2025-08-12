import {Image} from "expo-image";
import { Text, View, StyleSheet, TextInput,} from "react-native";
import Button from "../../components/Button";
import { colors,typography } from "@/styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/Logo.png")}
        style={{ width: 200, height: 200, marginBottom: 20 }}
        contentFit="contain"
        transition={1000}
        alt="Logo" 
      />
      {/*
      <Button title="Continue with Google" style={styles.button} />
      */}
      <TextInput
        style={styles.TextInput}
        placeholder="Email or Username"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.TextInput}
        placeholder="Password"
        secureTextEntry
      />
      {/*<View style={styles.buttonContainer}>*/}
        <Button title="Login" style={styles.button} />
        <Text>———————— or ————————</Text>
        <Button title="Sign Up" style={styles.button} />
      {/*</View>*/}
      <Button title="Forgot Password?" style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    width: "50%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: typography.text.fontSize,
    color: colors.onBackground,
  },
  button: {
    margin: 10,
  },
  TextInput: {
    height: 40,
    borderColor: "#000000",
    borderWidth: 1,
    margin: 10,
    paddingHorizontal: 5,
    width: "70%",
    borderRadius: 5
  },
});
