import React, { useState } from "react";
import { View, Modal, Pressable, Alert, TextInput } from "react-native";
import { Button, Text, IconButton } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { resetUser, setLogOut } from "../../Actions";
import { firebase } from "../../Firebase/config";
import styles from "./styles"
export default function Feed({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false)
    const [newPost, setNewPost] = useState();
    const user = useSelector(state => state.user);
    const dispatch = useDispatch()
    function handleLogout() {
        console.log("pressed logout")
        firebase.auth().signOut().then(() => {
            dispatch(resetUser());
            dispatch(setLogOut());
        }).catch((error) => {
            console.log(error)
        });
    }
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 22 }}>
            <Text>Homescreen</Text>
            <Text>welcome, {user.email}</Text>
            <Text>your name is {user.name}</Text>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={{
                    backgroundColor: "lightblue",
                    borderRadius: 20,
                    padding: 15,
                    flex: 1,
                    justifyContent: "center",
                }}>
                    <View style={{ alignItems: "flex-end" }}>
                        <IconButton icon="pencil-outline" />
                    </View>
                    <View style={{ flex: 7 }}>
                        <TextInput multiline={true} value={newPost} onChangeText={text => { setNewPost(text) }} underlineColorAndroid="transparent" allowFontScaling={true} maxFontSizeMultiplier={0} placeholder="What's Up" style={styles.Text} />
                    </View>
                    <View style={{ flex: 1, justifyContent: "flex-end" }}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }}>
                            <View>
                                <IconButton icon="delete-outline" />
                            </View>
                            <View>
                                <IconButton icon="send-outline" color="black" />
                            </View>
                        </View>


                    </View>

                </View>
            </Modal>
            <Button onPress={() => handleLogout()}>Logout</Button>
            <Button onPress={() => { setModalVisible(true) }}>Create Post</Button>
            <Button onPress={() => { navigation.navigate("Profile") }}>go to Profile</Button>
        </View>
    );
}
