import React, { useState, useEffect } from "react";
import { Text, TextInput, Button, HelperText } from "react-native-paper";
import { firebase } from "../../Firebase/config"
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { setUser } from "../../Actions/index";
import { setLogIn } from "../../Actions/index";

export default function Register({ navigation, setlogin }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [verifypassword, setVerifyPassword] = useState();
  const [passVisible, setPassVisible] = useState(true);
  const [formErrors, setFormError] = useState([]);

  function handleSubmit() {
    setFormError([]);
    if (name.length == 0) {
      setFormError(formErrors => [...formErrors, "Name cannot be empty"])
    }
    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) {
      setFormError(formErrors => [...formErrors, "Invalid Email!"])
    }
    if (password.length < 6) {
      setFormError(formErrors => [...formErrors, "Password length must be greater than 7!"])
    }
    if (verifypassword != password) {
      setFormError(formErrors => [...formErrors, "Passwords do not match!"])
    }
    if (formErrors.length == 0) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          var user = userCredential.user;
          user.updateProfile({ displayname: name }).catch((error) => console.log(error))
          dispatch(setUser({ name, email }));
          dispatch(setLogIn(true))
        })
        .catch((error) => {
          console.log(error)
        });
    }
  }
  var errordisplay = formErrors.map((err) =>
  (<HelperText type="error">
    {err}
  </HelperText>)
  )
  return (
    <View style={{ flex: 1, padding: 20, justifyCenter: "center" }}>
      <View>{errordisplay}</View>
      <View style={{ margin: 5 }}><TextInput
        mode="outlined"
        onChangeText={setName}
        value={name}
        placeholder="Name"
        onFocus={() => setFormError([])}
      /></View>
      <View style={{ margin: 5 }}><TextInput
        mode="outlined"
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        onFocus={() => setFormError([])}
      /></View>
      <View style={{ margin: 5 }}><TextInput
        mode="outlined"
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        onFocus={() => setFormError([])}
        secureTextEntry={passVisible}
        right={
          <TextInput.Icon
            name={passVisible === true ? "eye-off-outline" : "eye-outline"}
            onPress={() => {
              passVisible === true
                ? setPassVisible(false)
                : setPassVisible(true);
            }}
          />
        }
      /></View>
      <View style={{ margin: 5 }}><TextInput
        mode="outlined"
        onChangeText={setVerifyPassword}
        value={verifypassword}
        placeholder="Verify Password"
        onFocus={() => setFormError([])}
        secureTextEntry={passVisible}
        right={
          <TextInput.Icon
            name={passVisible === true ? "eye-off-outline" : "eye-outline"}
            onPress={() => {
              passVisible === true
                ? setPassVisible(false)
                : setPassVisible(true);
            }}
          />
        }
      /></View>
      <View style={{ margin: 5 }}><Button mode="contained" onPress={() => handleSubmit()}>
        Register
  </Button></View>







    </View>
  );
}
