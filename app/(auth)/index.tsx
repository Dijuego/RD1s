import {Image} from "expo-image";
import { Text, View, StyleSheet, TextInput, Button,  } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Logo Placeholder</Text>
      <Button
        title="Continue with Google"
        onPress={() => {
          // Navigation logic to go to home screen
        }}
      />
      <TextInput
        style={styles.text}
        placeholder="Email or Username"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.text}
        placeholder="Password"
        secureTextEntry
      />
      <Button
        title="Login"
        onPress={() => {
          // Logic to handle login
        }}
      />
      <Text>Or</Text>
      <Button
        title="Create account"
        onPress={() => {
          // Logic to navigate to sign up screen
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
  },
  TextInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: "80%",
  },
});
