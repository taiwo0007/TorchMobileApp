import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "../screens/SearchScreen";
import EscooterDetailScreen from "../screens/EscooterDetailScreen";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import BookTripScreen from "../screens/BookTripScreen";
import Icon from "../UI/Icon";
import LogInScreen from "../screens/LogInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import VerifyPromptScreen from "../screens/VerifyPromptScreen";
import EScooterResultsScreen from "../screens/EScooterResultsScreen";
import MapScreen from "../screens/MapScreen";
import AllReviews from "../screens/AllReviewsScreen";
import AllReviewsScreen from "../screens/AllReviewsScreen";
import TripDetailScreen from "../screens/TripDetailScreen";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        tabBarStyle: { borderTopColor: "grey" },
        tabBarActiveTintColor: "black",
        tabBarVisible: false,
      }}
    >
      <Stack.Screen
        name="SearchScreen"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TripDetailScreen"
        component={TripDetailScreen}
        options={{
         
        }}
      />
      <Stack.Screen
        name="EscooterDetailScreen"
        component={EscooterDetailScreen}
        options={{}}
      />
      <Stack.Screen
        name="AllReviewsScreen"
        component={AllReviewsScreen}
        options={{}}
      />
      <Stack.Screen
        name="EScooterResultsScreen"
        component={EScooterResultsScreen}
        options={({ navigation, route }) => ({
          headerStyle: {
            backgroundColor: "transparent",
            shadowColor: "transparent", // on iOS
            elevation: 0, // on Android
            margin: 0,
            padding: 0,
          },
          headerTitle: () => {
            return (
              <Text>
                You searched for "
                <Text style={{ fontWeight: 800 }}>
                  {route?.params?.location}
                </Text>
                "
              </Text>
            );
          },
          headerLeft: () => (
            <Icon
              name="arrow-back-sharp"
              size={24}
              color="black"
              onPress={() => navigation.goBack()} // you can use navigation here
            />
          ),
        })}
      />
      <Stack.Screen
        name="BookTripScreen"
        component={BookTripScreen}
        options={({ navigation }) => ({
          title: "Payment",
          headerTitleStyle: {
              fontWeight: "700"
          },
          headerLeft: () => (
            <Icon
              name="arrow-back-sharp"
              size={24}
              color="black"
              onPress={() => navigation.goBack()} // you can use navigation here
            />
          ),
        })}
      />
       <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Icon
              name="arrow-back-sharp"
              size={24}
              color="black"
              onPress={() => navigation.goBack()} // you can use navigation here
            />
          ),
        })}
      />
      <Stack.Screen
        name="LogInScreen"
        component={LogInScreen}
        options={({ navigation }) => ({
          presentation: "modal",
          title: "Log in",
          headerTitleStyle: { fontFamily: "gros-bold", fontSize: 18 },
          headerLeft: () => (
            <Icon
              name="close"
              size={24}
              color="black"
              onPress={() => navigation.goBack()} // you can use navigation here
            />
          ),
        })}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={({ navigation }) => ({
          presentation: "formSheet",
          title: "Sign up",
          headerTitleStyle: { fontFamily: "gros-bold", fontSize: 18 },
          headerLeft: () => (
            <Icon
              name="close"
              size={24}
              color="black"
              onPress={() => navigation.goBack()} // you can use navigation here
            />
          ),
        })}
      />

      <Stack.Screen
        name="VerifyPromptScreen"
        component={VerifyPromptScreen}
        options={({ navigation }) => ({
          presentation: "modal",

          headerTitleStyle: { fontFamily: "gros-bold", fontSize: 18 },
          headerLeft: () => (
            <Icon
              name="close"
              size={24}
              color="black"
              onPress={() => navigation.goBack()} // you can use navigation here
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}
