import React, { useState, useEffect } from "react";
import { Text, TextInput, Button, HelperText } from "react-native-paper";
import { firebase } from "../../Firebase/config"
import { View } from "react-native";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [verifypassword, setVerifyPassword] = useState("");
  const [passVisible, setPassVisible] = useState(false);
  const [formErrors, setFormError] = useState([]);

  function handleSubmit() {
    setFormError([]);
    if (name.length == 0) {
      setFormError(formErrors => [...formErrors, "Name cannot be empty"])
    }
    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) {
      setFormError(formErrors => [...formErrors, "Invalid Email!"])
    }
    if (password.length < 8) {
      setFormError(formErrors => [...formErrors, "Password length must be greater than 7!"])
    }
    if (verifypassword != password) {
      setFormError(formErrors => [...formErrors, "Passwords do not match!"])
    }
    if (formErrors.length == 0) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // console.log(userCredential)
          var user = userCredential.user;
          console.log(user)
          // ...
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
    <View>
      {errordisplay}
      <TextInput
        onChangeText={setName}
        value={name}
        placeholder="Name"
        onFocus={() => setFormError([])}
      />
      <TextInput
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        onFocus={() => setFormError([])}
      />
      <TextInput
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        onFocus={() => setFormError([])}
        secureTextEntry={passVisible}
        right={
          <TextInput.Icon
            name="eye"
            onPress={() => {
              passVisible === true
                ? setPassVisible(false)
                : setPassVisible(true);
            }}
          />
        }
      />
      <TextInput
        onChangeText={setVerifyPassword}
        value={verifypassword}
        placeholder="Verify Password"
        onFocus={() => setFormError([])}
        secureTextEntry={passVisible}
        right={
          <TextInput.Icon
            name="eye"
            onPress={() => {
              passVisible === true
                ? setPassVisible(false)
                : setPassVisible(true);
            }}
          />
        }
      />
      <Button mode="contained" onPress={() => handleSubmit()}>
        Register
      </Button>
    </View>
  );
}
