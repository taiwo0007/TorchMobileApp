import { Text, View } from "react-native";
import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import SearchScreen from "../screens/SearchScreen";
import TripsScreen from "../screens/TripsScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FavoritesScreen from "../screens/FavoritesScreen";
import { MaterialIcons } from "@expo/vector-icons";
import ProfileScreen from "../screens/ProfileScreen";
import ActivitiesScreen from "../screens/ActivitiesScreen";
import TripsTopTabs from "./TripsTopTabs";
import { Octicons } from "@expo/vector-icons";
import { useSelector } from "react-redux"; // import useSelector hook from Redux
import auth from "../store/auth";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const authState = useSelector((state) => state.auth); // Access the state from Redux

  return (
    <Tab.Navigator
      screenOptions={{
        // headerShown: false,
        tabBarStyle: { borderTopColor: "grey" },
        tabBarActiveTintColor: "black",
        headerTitleStyle: {
          fontFamily: "gros-black",
          fontWeight: 800,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          // headerShown: true,
          title: "hello world",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="md-home" size={24} color="blue" />
            ) : (
              <Ionicons name="md-home-outline" size={24} color="black" />
            ),
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "black",
        }}
        name="HomeScreen"
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Favorites",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="heart" size={24} color="blue" />
            ) : (
              <Ionicons name="heart-outline" size={24} color="black" />
            ),
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "black",
        }}
        name="FavoritesScreen"
        component={FavoritesScreen}
      />

      <Tab.Screen
        name="TripsScreen"
        component={TripsTopTabs}
        options={({ route, navigation }) => {
          let isShowHeader = true;
          // apply additional style when the condition is met
          if (authState.isAuthenticated === false) {
            isShowHeader = false;
          }

          return {
            headerStyle: {
              backgroundColor: "white",
              shadowColor: "transparent", // on iOS
              elevation: 0, // on Android
              fontFamily: "gros-black",
              fontWeight: 900,
              borderBottomWidth: 0,
              borderWidth: 0,
            },
            headerShadowVisible: false,
            tabBarLabel: "Trips",
            headerShown: isShowHeader,
            title: "Trips",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialCommunityIcons name="scooter" size={24} color="blue" />
              ) : (
                <MaterialCommunityIcons
                  name="scooter"
                  size={24}
                  color="black"
                />
              ),
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "black",
          };
        }}
      />

      <Tab.Screen
        options={{
          tabBarLabel: "Activities",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons
                name="md-notifications"
                size={24}
                color="blue"
              />
            ) : (
              <Ionicons
                name="md-notifications-outline"
                size={24}
                color="black"
              />
            ),
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "black",
        }}
        name="ActivitiesScreen"
        component={ActivitiesScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Octicons name="person" size={24} color="blue" />
            ) : (
              <Octicons name="person" size={24} color="black" />
            ),
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "black",
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
