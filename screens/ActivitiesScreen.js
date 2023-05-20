import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import LoginPlaceHolder from '../UI/LoginPlaceHolder';
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

export default function ActivitiesScreen() {
  const navigaton = useNavigation();
  function onLoginHandler() {
    navigaton.navigate("LogInScreen");
  }
  const authState = useSelector((state) => state.auth);
  const isAuthenticated = authState.isAuthenticated;

  let content = (
    <LoginPlaceHolder
      title="Activities"
      onPress={onLoginHandler}
      heading="View your activities"
      subtitle="Activities will be displayed here after you have successfully logged in."
    />
  );

  if (authState.isAuthenticated) {
    content = <Text>Logged in</Text>;
  }

  return <SafeAreaView>{content}</SafeAreaView>;
}
