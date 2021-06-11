import React from "react";
import { Text, TextInput, Button } from "react-native-paper";
import { View } from "react-native";
import { firebase } from "../../Firebase/config";
import { useDispatch } from "react-redux";
import { setUser, setLogIn } from "../../Actions/index";
import styles from "./styles"
export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();
  // const loggedIn = useSelector(state => state.loggedIn)
  function handleLogin() {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        dispatch(setUser(user));
        dispatch(setLogIn());
        // setLogin(true);
        // navigation.navigate("Home");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <View style={{ flex: 1, padding: 20, justifyCenter: "center" }}>
      <View style={{ margin: 5 }}>
        <TextInput mode="outlined" onChangeText={setEmail} value={email} placeholder="Email" /></View>
      <View style={{ margin: 5 }}>
        <TextInput
          mode="outlined"
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <View >
        <View style={{ margin: 5 }}>
          <Button mode="contained" onPress={() => handleLogin()}>
            Login
        </Button>
        </View>
        <View style={{ margin: 5 }}>
          <Button mode="contained" onPress={() => navigation.navigate("Register")}>
            Sign Up
       </Button>
        </View>
      </View>
    </View>
  );
}
