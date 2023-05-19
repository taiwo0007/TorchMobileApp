import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import SearchHeader from "../components/Home/SearchHeader";
import { ScrollView } from "react-native-gesture-handler";
import EscooterCard from "../components/escooter/EscooterCard";
import GridLocations from "../components/Home/GridLocations";
import Banner from "../components/shared/Banner";
import MakeScrollList from "../components/Home/MakeScrollList";
import { useIsFocused } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth";
import InfoCardDark from "../UI/InfoCardDark";

export default function SearchScreen({ navigation }) {
  const renderScooterCard = (scooters) => {
    return <EscooterCard data={scooters.item} />;
  };
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    console.log("in heree now");

    if (
      !authState.user.isVerifiedConsent &&
      authState.isAuthenticated &&
      !authState.user.isVerified
    ) {
      setTimeout(() => {
        dispatch(authActions.verifyConsent());
        navigation.navigate("VerifyPromptScreen");
      }, 2000);
    }
  }, [isFocused, authState]);

  const scooters = [
    {
      key: 5,
      modelName: "Xiamoi Evolution 23 Max",
      image: "https://storage.googleapis.com/torch-gcp-bucket/escooter12.png",
      cost: 25.99,
      trips: 78,
      rating: 5,
    },
    {
      key: 6,
      modelName: "Xiamoi Evolution 23 Max",
      image: "https://storage.googleapis.com/torch-gcp-bucket/escooter13.png",
      cost: 31.99,
      trips: 91,
      rating: 4.32,
    },
    {
      key: 3,
      modelName: "Xiamoi Evolution 23 Max",
      image: "https://storage.googleapis.com/torch-gcp-bucket/escooter9.png",
      cost: 23,
      trips: 45,
      rating: 2.02,
    },
    {
      key: 2,
      modelName: "Xiamoi Evolution 23 Max",
      image: "https://storage.googleapis.com/torch-gcp-bucket/escooter10.png",
      cost: 33,
      trips: 3,
      rating: 4.02,
    },
    {
      key: 4,
      modelName: "Xiamoi Evolution 23 Max",
      image: "https://storage.googleapis.com/torch-gcp-bucket/escooter11.png",
      cost: 253,
      trips: 3,
      rating: 2.02,
    },
  ];
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerStyle: {
        backgroundColor: "white", // Set your desired background color
      },
      backgroundColor: "white",
    });
  }, []);
  return (
    <>
      <SearchHeader />
      <SafeAreaView style={{ flex: 6 }}>
        <ScrollView className="">
        <View className="mx-2">
              <InfoCardDark
                cta="Book now"
                icon="scooter"
                title="List a scooter to earn money every trip."
              />
              
            </View>
          <Text
            style={{ fontFamily: "gros-bold" }}
            className="font-bold text-lg mt-4 mb-1 px-3"
          >
            Feautred <Text style={{ fontFamily: "gros-bold" }}>Scooters</Text>
          </Text>

          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={scooters}
            renderItem={renderScooterCard}
            horizontal
          ></FlatList>
          <View className="mt-6">
            <GridLocations />
          </View>

          <View>
            <MakeScrollList />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
