import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  Button,
  SafeAreaView,
} from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { useLayoutEffect, useEffect, useState } from "react";
import Icon from "../UI/Icon";
import { ScrollView } from "react-native-gesture-handler";
import ActionFooter from "../components/shared/ActionFooter";
import CustomButton from "../UI/CustomButton";
import HostByHeader from "../components/host/HostByHeader";

import BottomModal from "../components/shared/BottomModal";
import Loader from "../components/shared/Loader";
import IconTextItem from "../UI/IconTextItem";
import IconTextItemCustom from "../UI/IconTextItemCustom";
import MiniMap from "../components/host/MiniMap";
import ContainerButton from "../UI/ContainerButton";

import ReviewCard from "../UI/ReviewCard";

import ButtonOutline from "../UI/ButtonOutline";

import { useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";

export default function EscooterDetailScreen({ navigation, route }) {
  const { id, modelName, cost, image } = route.params;
  const [hostData, setHostData] = useState(null);
  const [scooterData, setScooterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const authState = useSelector((state) => state.auth);

  const isFocused = useIsFocused();

  const mapNavigationHandler = () => {
    console.log("in the map");
    navigation.navigate("MapScreen", {
      escooterList: [scooterData],
    });
  };
  const allReviewsNavigationHandler = () => {
    navigation.navigate("AllReviewsScreen", {
      reviews: scooterData?.escooterReviews,
      rating: scooterData?.rating?.toFixed(2),
    });
  };

  let customButton = (onConfirm) => (
    <Button
      onPress={onConfirm}
      style={{
        container: { width: "30%", marginHorizontal: "3%" },
        text: { fontSize: 20 },
      }}
      primary
      title="confirm"
      text="confirm"
    />
  );

  const onMakeTripBooking = () => {
    if ( !authState.user.isVerified) {
      navigation.navigate("VerifyPromptScreen");
      return;
    }

    navigation.navigate("BookTripScreen", {
      escooter: scooterData,
      host: hostData,
      tripId: 4
    });
  };

  const onShowModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    const fetchScooterData = async () => {
      try {
        const response = await fetch(
          "http://192.168.1.12:8080/api/escooter/escooter-detail/" + id
        );

        const data = await response.json();
        setScooterData(data);
        fetchHostData();

        // Process the response data
      } catch (error) {
        // Handle the error
      }
    };

    const fetchHostData = async () => {
      try {
        const hostId = parseInt(scooterData?.host);

        // Make the second fetch request based on the value of scooterData.val
        const response = await fetch(
          "http://192.168.1.12:8080/api/host/host-details/" + hostId
        );

        const data = await response.json();

        setHostData(data);

        setLoading(false);
        // Process the additional data
      } catch (error) {
        // Handle the error
        console.log(error);
        setLoading(false);
      }
    };

    fetchScooterData();
  }, [scooterData.host]);

  const onGoBackHandler = () => {
    navigation.goBack();
  };
  const param = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "transparent",
        shadowColor: "transparent", // on iOS
        elevation: 0, // on Android
      },
      headerLeft: () => (
        <View className="z-20 bg-white rounded-md">
          <Icon
            name="arrow-back-sharp"
            size={24}
            color="black"
            onPress={() => navigation.goBack()} // you can use navigation here
          />
        </View>
      ),

      headerTransparent: true,
      title: "", // Add this line
    });
  }, [navigation]);

  return (
    <>
      <ScrollView className="relative">
        <View className="flex-1 relative">
          <StatusBar barStyle="auto" />
          <Image
            className=" h-96 w-full"
            source={{
              uri: image,
            }}
          />
        </View>

        {loading && (
          <View className="flex-1 flex-row h-40 items-center justify-center">
            <Text>
              <Loader size="medium" />
            </Text>
          </View>
        )}

        {!loading && (
          <View
            style={StyleSheet.informationContainer}
            className="m-4 mb-5 border-slate-200  border-b"
          >
            <View className="pb-2 ">
              <Text
                style={{ fontFamily: "gros-bold" }}
                className="text-2xl font-medium "
              >
                {scooterData.modelName}
              </Text>
              <View className="flex-row items-center my-3">
                <View className="  flex-row items-center">
                  <Icon name="star" size={12} color="black" />
                  <Text className="ml-1">
                    {scooterData?.rating?.toFixed(2)}
                  </Text>
                </View>
                {/* dot */}
                <View className="flex-row items-center ml-2">
                  <Text>·</Text>
                </View>
                <View className="flex-row items-center">
                  <ContainerButton onPress={allReviewsNavigationHandler}>
                    {scooterData?.escooterReviews?.length > 0 && (
                      <Text className="underline font-bold ml-2">
                        {scooterData?.escooterReviews?.length} reviews
                      </Text>
                    )}
                  </ContainerButton>
                </View>
                <View className="flex-row items-center ml-2">
                  <Text>·</Text>
                </View>
                <View className="flex-row items-center">
                  <Text style={{ fontFamily: "gros" }} className=" ml-2">
                    {scooterData?.country}, {scooterData?.county}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
        {/* More */}
        {!loading && (
          <View className="border-b border-slate-200  pb-5 mx-4">
            <HostByHeader hostUser={hostData?.hostUser} />
          </View>
        )}

        {!loading && (
          <View className="px-4 pb-5 mt-4">
            <Text
              style={{ fontFamily: "gros-bold" }}
              className="text-lg mb-2 font-bold"
            >
              Main Features
            </Text>
            <IconTextItem
              icon="ios-water-outline"
              text={
                scooterData?.waterResistant === true
                  ? "Water resistant"
                  : "Not water resistant"
              }
            />

            <IconTextItemCustom
              text={`Scooter weighs around ${scooterData?.scooterWeight} lbs`}
            >
              <AntDesign name="laptop" size={24} color="black" />
            </IconTextItemCustom>
            <IconTextItemCustom
              text={`Scooter speed is ${scooterData?.maxSpeed} km/h`}
            >
              <MaterialCommunityIcons
                name="clock-fast"
                size={24}
                color="text-slate-800"
              />
            </IconTextItemCustom>
            <IconTextItemCustom text={`Max range ${scooterData?.maxRange} km`}>
              <AntDesign name="up-square-o" size={24} color="black" />
            </IconTextItemCustom>
            <IconTextItemCustom
              text={`User weight ${scooterData?.maxWeight} lbs`}
            >
              <MaterialCommunityIcons
                name="relative-scale"
                size={24}
                color="text-slate-800"
              />
            </IconTextItemCustom>
          </View>
        )}

        {!loading && (
          <View className="mx-4 border-b border-slate-200 pt-4  border-t">
            <Text
              style={{ fontFamily: "gros-bold" }}
              className="text-lg mb-3 font-bold"
            >
              Scooter location
            </Text>
            <View className=" pb-6">
              <ContainerButton onPress={mapNavigationHandler}>
                <MiniMap
                  escooter={scooterData}
                  latitude={scooterData?.latitude}
                  longitude={scooterData?.longitude}
                />
              </ContainerButton>
              <View>
                <Text className="font-bold mt-6" color="black">
                  {scooterData?.country}, {scooterData?.county}
                </Text>
                <Text
                  style={{ lineHeight: 25 }}
                  className=" mt-6"
                  color="black"
                >
                  This scooter is situated in {scooterData?.address},{" "}
                  {scooterData?.county}. Meet the host at the pickup point
                </Text>
              </View>
            </View>
          </View>
        )}

        {!loading && (
          <View className="mt-3 ">
            <View className="flex-row justify-between mx-4 ">
              <Text
                style={{ fontFamily: "gros-bold" }}
                className="text-lg font-bold"
              >
                {scooterData?.escooterReviews.length} reviews
              </Text>

              <View className="  flex-row items-center">
                <Icon name="star" size={12} color="black" />
                <Text
                  style={{ fontFamily: "gros-bold" }}
                  className="ml-1 text-lg"
                >
                  {scooterData?.rating?.toFixed(2)}
                </Text>
              </View>
            </View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              className="mt-3 "
            >
              {scooterData?.escooterReviews.map((scooter) => (
                <ContainerButton onPress={allReviewsNavigationHandler}>
                  <ReviewCard review={scooter} />
                </ContainerButton>
              ))}
            </ScrollView>
            <View className="mt-3 mx-4 ">
              <ButtonOutline
                onPress={allReviewsNavigationHandler}
                style={{
                  paddingVertical: 12,
                  paddingHorizontal: 11,
                }}
                color="black"
              >
                Show all reviews{" "}
              </ButtonOutline>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Action footer */}
      {!loading && (
        <ActionFooter onPress={onMakeTripBooking} text="Continue">
          <CustomButton onPress={onShowModal} color="white">
            <View>
              <Text
                style={{ fontFamily: "gros-bold" }}
                className="text-black font-bold text-lg"
              >
                €{scooterData.cost?.toFixed(2)}
                <Text
                  style={{ fontFamily: "gros-light" }}
                  className="font-light"
                >
                  /day
                </Text>
              </Text>
              <View className="  flex-row items-center">
                <Icon name="star" size={12} color="black" />
                <Text style={{ fontFamily: "gros-bold" }} className="ml-1">
                  {scooterData?.rating?.toFixed(2)}
                </Text>
              </View>
            </View>
          </CustomButton>
        </ActionFooter>
      )}

      {/* <BottomModal /> */}
      <BottomModal visible={showModal} />
    </>
  );
}

const styles = StyleSheet.create({
  informationContainer: {
    borderBottomColor: "black",
    borderBottomWidth: 13,
  },
});
