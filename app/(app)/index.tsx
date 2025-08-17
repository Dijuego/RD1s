import Text from "@/components/Text";
import View from "@/components/View";
import { typography } from "@/styles";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import Button from "../../components/Button";
import ThemedTextInput from "../../components/textInput";

export default function Index() {


  return (
    <View >
      <Image
        source={require("../../assets/images/Logo.svg")}
        style={{ width: 300, height: 300, marginBottom: 0 }}
        contentFit="contain"
        transition={1000}
        alt="Logo" 
      />
      <ThemedTextInput
        style={styles.TextInput}
        placeholder="Email or Username"
      />
      <ThemedTextInput
        style={styles.TextInput}
        placeholder="Password"
        secureTextEntry
      />
      <Button 
        title="Login" 
        style={styles.button}
      />
      <Text style={styles.text}>———————— or ————————</Text>
      <Button 
        title="Sign Up" 
        style={styles.button}
      />
      <Button 
        title="Forgot Password?" 
        style={styles.button} 
      />
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
  text: {
    fontSize: typography.text.fontSize,
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
