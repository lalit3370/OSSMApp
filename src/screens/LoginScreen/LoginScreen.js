import React from "react";
import { Text, TextInput, Button } from "react-native-paper";
import { View } from "react-native";
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <View>
      <Text style={{ fontSize: 20, justifyContent: "center" }}>
        this is login screen
      </Text>
      <TextInput onChangeText={setEmail} value={email} placeholder="email" />
      <TextInput
        onChangeText={setPassword}
        value={password}
        placeholder="password"
        secureTextEntry={true}
      />
      <Button mode="contained" onPress={() => navigation.navigate("Home")}>
        Login
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate("Register")}>
        Sign Up
      </Button>
    </View>
  );
}
