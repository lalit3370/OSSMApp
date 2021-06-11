import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen, HomeScreen, RegistrationScreen } from "./Screens";
import { useTheme } from "react-native-paper"
// import {Home as HomeScreen} from "./Screens"
import { useSelector } from 'react-redux'
const Stack = createStackNavigator();

export default function Root() {
    const loggedIn = useSelector(state => state.loggedIn)
    const [theme, setTheme] = useState(useTheme())
    return (
        <NavigationContainer theme={theme}>
            {loggedIn === true ? (
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                </Stack.Navigator>) : (
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Register" component={RegistrationScreen} />
                </Stack.Navigator>
            )
            }
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
