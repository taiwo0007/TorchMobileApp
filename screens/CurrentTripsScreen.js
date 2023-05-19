import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { getUserDetails } from "../util/user-http";

import { useIsFocused } from "@react-navigation/native";

import TripCard from "../UI/TripCard";
import Loader from "../components/shared/Loader";

export default function CurrentTripScreen({ navigation }) {
  const navigaton = useNavigation();
  function onLoginHandler() {
    navigaton.navigate("LogInScreen");
  }
  const authState = useSelector((state) => state.auth);
  const isAuthenticated = authState?.isAuthenticated;
  const [currentUser, setCurrentUser] = useState(null);
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchUserData = async () => {
      console.log("The user", authState.user.isVerified);
      if (isAuthenticated) {
        const profile = await getUserDetails(authState.token);

        setTrips(profile?.renterTrips);
      }
    };

    try {
      fetchUserData();
    } catch (error) {
      console.log(error);
    }
    setLoading(false)

  }, [getUserDetails, isFocused]);

  if(loading) {

    return (<View className="flex-1 flex-row items-center justify-center">
    <Text>
      <Loader size="medium" />
    </Text>
  </View>)
  }

  if (isAuthenticated === false || trips?.length === 0) {
    return (
      <View className="flex-row items-center mt-4 mx-auto">
        <View className="mx-auto items-center">
          <Image
            style={styles.image}
            source={require("../assets/images/nohosttrips.png")}
          />
          <Text className="text-2xl mt-3 font-bold">No trips</Text>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView>
      {trips?.map((trip) => {
        return <TripCard trip={trip} />;
      })}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 186,
    width: 186,
  },
});
