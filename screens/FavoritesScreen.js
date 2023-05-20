import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Title from "../UI/Title";
import Subtitle from "../UI/Subtitle";
import StyledText from "../UI/StyledText";
import NormalButton from "../UI/CustomButton";
import CustomButton from "../UI/CustomButton";
import LoginPlaceHolder from '../UI/LoginPlaceHolder';
import { useNavigation } from "@react-navigation/native";

export default function FavoritesScreen() {
  const navigaton = useNavigation();
  function onLoginHandler(){
    navigaton.navigate("LogInScreen")
  }
  return (
    <SafeAreaView>
      <LoginPlaceHolder
        title="Favorites"
        onPress={onLoginHandler}
        heading="Login to access favorites"
        subtitle="Access favorites and view a host of scooters once you are logged in."
      />
    </SafeAreaView>
  );
}
