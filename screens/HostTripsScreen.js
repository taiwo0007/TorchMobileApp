import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { getUserDetails } from "../util/user-http";

import { useIsFocused } from "@react-navigation/native";

import TripCard from "../UI/TripCard";
import { getHostDetails } from "../util/host-http";
import Title from "../UI/Title";
import Loader from "../components/shared/Loader";
const dimensions = Dimensions.get("window");
const imageHeight = Math.round((dimensions.width * 9) / 9);
const imageWidth = dimensions.width;

export default function BookedTripScreen({ navigation }) {
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
        const host = await getHostDetails(authState.token);

        setTrips(host?.hostTrips);
      }
    };

    try {
      fetchUserData();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, [getUserDetails, isFocused]);

  if (loading) {
    return (
      <View className="flex-1 flex-row items-center justify-center">
        <Text>
          <Loader size="medium" />
        </Text>
      </View>
    );
  }

  if (isAuthenticated === false || trips?.length === 0) {
    return (
      <View className="flex-row items-center mt-4 mx-auto">
        <View className="mx-auto items-center">
          <Image
            style={styles.image}
            source={require("../assets/images/notrips.png")}
          />
          <Text className="text-2xl font-bold">No host trips</Text>
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
    height: 200,
    width: 200,
  },
});
