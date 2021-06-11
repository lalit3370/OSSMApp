import React from "react";
import { Text } from "react-native-paper";
import { useSelector } from "react-redux";

export default function Profile() {
    const user = useSelector(state => state.user);
    return (
        <Text>
            this is profile screen,{user.name}
        </Text>
    )
}
