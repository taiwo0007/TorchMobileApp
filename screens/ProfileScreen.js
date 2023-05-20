import {
  View,
  Text,
  SafeAreaView,
  Image,
  Pressable,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../UI/Title";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { getUserDetails } from "../util/user-http";
import Subtitle from "../UI/Subtitle";
import { useDispatch } from "react-redux";
import { SvgUri } from "react-native-svg";

import Icon from "../UI/Icon";
import CustomButton from "../UI/CustomButton";
import { authActions } from "../store/auth";
import { useIsFocused } from "@react-navigation/native";
import { createAvatar } from "@dicebear/core";
import { lorelei, micah } from "@dicebear/collection";
import InfoCard from "../UI/InfoCard";
import ContainerButton from "../UI/ContainerButton";
import LoginPlaceHolder from '../UI/LoginPlaceHolder';
import InfoCardDark from "../UI/InfoCardDark";

export default function ProfileScreen({ navigation }) {
  const navigaton = useNavigation();
  function onLoginHandler() {
    navigaton.navigate("LogInScreen");
  }
  const authState = useSelector((state) => state.auth);
  const isAuthenticated = authState?.isAuthenticated;
  const [currentUser, setCurrentUser] = useState(null);
  const isFocused = useIsFocused();
  const [avatar, setAvatar] = useState(null);

  function onLoginHandler() {
    navigaton.navigate("LogInScreen");
  }
  function onSignUpHandler() {
    navigaton.navigate("SignUpScreen");
  }

  const dispatch = useDispatch();

  const fetchUri = async () => {
    const logo = createAvatar(micah, {
      seed: authState?.email,
      // ... other options
    });
    const dataUri = await logo.toDataUri();

    setAvatar(dataUri);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      console.log("The user", authState.user.isVerified);
      if (isAuthenticated) {
        const profile = await getUserDetails(authState.token);

        setCurrentUser(profile);
      }
    };

    try {
      fetchUri();
      fetchUserData();
    } catch (error) {
      console.log(error);
    }
  }, [getUserDetails, isFocused]);

  return (
    <View className="flex-1 ">
      <SafeAreaView>
        {isAuthenticated && (
          <View className="p-5 pt-12">
            <Title>Profile</Title>

            <View className="mt-5  border-b border-slate-300 pb-4 flex-row items-center">
              {currentUser?.profile !== null && (
                <Image
                  source={{ uri: currentUser?.profile }}
                  className="w-14 h-14 rounded-full"
                />
              )}
              {currentUser?.profile === null && (
                <View className="rounded-full overflow-hidden border">
                  <SvgUri
                    style={{
                      borderRadius: 30, // half of your width and height
                    }}
                    uri={avatar}
                    width={60} // adjust the size to fit your needs
                    height={60}
                  />
                </View>
              )}
              <View className="ml-4 flex-1 flex-row justify-between items-center">
                <View>
                  {currentUser?.firstName !== null && (
                    <Text
                      className="font-bold text-2xl"
                      style={{ fontFamily: "gros" }}
                    >
                      {currentUser?.firstName}
                    </Text>
                  )}
                  {currentUser?.firstName === null && (
                    <Text
                      className="font-bold text-xl"
                      style={{ fontFamily: "gros" }}
                    >
                      {currentUser?.email}
                    </Text>
                  )}
                  <Text style={{ fontFamily: "gros-light" }}>
                    Show your profile
                  </Text>
                </View>
                <Icon name="chevron-forward-sharp" size={24} color="black" />
              </View>
            </View>
            {authState.user.isVerified === false && (
              <View className="mt-2">
                <ContainerButton
                  onPress={() => navigation.navigate("VerifyPromptScreen")}
                >
                  <InfoCard
                    icon="ios-finger-print-sharp"
                    title="Verify now"
                    text="Verify now to access more."
                  />
                </ContainerButton>
              </View>
            )}
            {authState.user.isVerified === true && (
              <View className="my-4">
           
                <InfoCardDark
                cta="Book now"
                  icon="scooter"
                  title="List a scooter to earn money every trip."
   
                />
              </View>
            )}
            <View className="mt-5">
              <View className="flex-row items-center my-3">
                <Icon name="ios-person-outline" size={17} color="black" />
                <Text className="ml-3" style={{ fontFamily: "gros" }}>
                  {" "}
                  Your account
                </Text>
              </View>
              <View className="flex-row items-center my-3">
                <Icon name="ios-rocket-outline" size={17} color="black" />
                <Text className="ml-3" style={{ fontFamily: "gros" }}>
                  {" "}
                  Host
                </Text>
              </View>
              <View className="flex-row items-center my-3">
                <Icon name="albums-outline" size={17} color="black" />
                <Text className="ml-3" style={{ fontFamily: "gros" }}>
                  {" "}
                  Terms & Conditions
                </Text>
              </View>
              <View className="flex-row items-center my-3">
                <Icon
                  name="ios-document-text-outline"
                  size={17}
                  color="black"
                />
                <Text className="ml-3" style={{ fontFamily: "gros" }}>
                  {" "}
                  Legal
                </Text>
              </View>
              <View className="flex-row items-center my-3"></View>
            </View>
          </View>
        )}

        {/* Not uathenticated */}
        {!isAuthenticated && (
          <>
            <LoginPlaceHolder
              title="Profile"
              onPress={onLoginHandler}
              subtitle="Your trips is only a moment away, login today."
            />

            <View className="px-6 flex-row">
              <Text className="">Create an account</Text>
              <Text onPress={onSignUpHandler} className="underline ml-[3]">
                here
              </Text>
            </View>
          </>
        )}
      </SafeAreaView>
      {isAuthenticated  && <View className=" mx-5 border-t border-t-slate-300   pt-7"></View>}
      {isAuthenticated  && <View className=" px-2">
        <Text
          onPress={() => {
            dispatch(authActions.logout());
            AsyncStorage.removeItem("auth")
              .then(() => console.log("Removed auth state successfully"))
              .catch((error) =>
                console.error("Error removing auth state:", error)
              );

            navigaton.navigate("LogInScreen");
          }}
          className="ml-3"
          style={{ fontFamily: "gros" }}
        >
          Log out
        </Text>
      </View>}
    </View>
  );
}
