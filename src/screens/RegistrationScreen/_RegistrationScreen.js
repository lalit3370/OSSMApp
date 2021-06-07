import React, { useState, useEffect } from "react";
import { Text, TextInput, Button, HelperText } from "react-native-paper";
import { View } from "react-native";

export default function Register() {
  const [emailError, setEmailError] = useState("");
  const [verPassErr, setVerPassErr] = useState("");
  const [passworderr, setPasswordError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  // const [nameError, setNameError] = useState("");
  const [verifypassword, setVerifyPassword] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);
  const [passVisible, setPassVisible] = useState(false);

  useEffect(() => {
    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) {
      setEmailError("Invalid Email Id");
    } else {
      setEmailError();
    }
  }, [email]);

  useEffect(() => {
    if (password.length < 8) {
      setPasswordError("Password length must be greater than 7");
    }
    else {
      setPasswordError();
    }
  }, [password]);
  useEffect(() => {
    if (password != verifypassword) {
      setVerPassErr("Passwords do not match");
    } else if (verifypassword.length == 0) {
      setVerPassErr("Password can't be empty");
    } else {
      setVerPassErr();
    }
  }, [verifypassword]);
  return (
    <View>
      <Text>Registration Screen</Text>
      <TextInput
        onChangeText={setName}
        value={name}
        placeholder="Name"
        onFocus={() => {
          setErrorVisible(false);
        }}
      />
      <HelperText type="error" visible={errorVisible}>
        {name.length == 0 ? "Name shouldn't be empty" : ""}
      </HelperText>
      <TextInput
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        onFocus={() => {
          setErrorVisible(false);
        }}
      />
      <HelperText type="error" visible={errorVisible}>
        {emailError}
      </HelperText>
      <TextInput
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry={passVisible}
        onFocus={() => {
          setPasswordError();
          setErrorVisible(false);
        }}
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
      <HelperText type="error" visible={errorVisible}>
        {passworderr}
      </HelperText>
      <TextInput
        onChangeText={setVerifyPassword}
        value={verifypassword}
        placeholder="Verify Password"
        secureTextEntry={passVisible}
        onFocus={() => {
          setErrorVisible(false);
          setVerPassErr();
        }}
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
      <HelperText type="error" visible={errorVisible}>
        {verPassErr}
      </HelperText>
      <Button mode="contained" onPress={() => setErrorVisible(true)}>
        Register
      </Button>
    </View>
  );
}
