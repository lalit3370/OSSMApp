import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from "react";
import Feed from "./Feed";
import Profile from './Profile';
// import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons"
const HomeTab = createMaterialBottomTabNavigator();
// const HomeStack = createStackNavigator();

export default function Home() {
  return (
    <HomeTab.Navigator>
      <HomeTab.Screen options={{
        tabBarLabel: "Home",
        tabBarIcon: () => {
          return (
            <MaterialCommunityIcons
              name="home-outline"
              size={26}
            />
          );
        }
      }} name="Feed" component={Feed} />
      <HomeTab.Screen name="Profile" component={Profile} options={{
        tabBarLabel: "Profile",
        tabBarIcon: () => {
          return (
            <MaterialCommunityIcons
              name="account-outline"
              size={26}
            />
          );
        }
      }} />
    </HomeTab.Navigator>
  )
}