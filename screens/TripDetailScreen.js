import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getTrip } from "../util/trip-http";
import { useSelector } from "react-redux";
import MiniMap from "../components/host/MiniMap";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import HostByHeader from "../components/host/HostByHeader";
import CustomButton from "../UI/CustomButton";

export default function TripDetailScreen({ navigation, route }) {
  const authState = useSelector((state) => state.auth);
  const [trip, settrip] = useState(null);
  const [newlyBooked, setnewlyBooked] = useState(false);
  const [host, sethost] = useState(null);
  const [isNewlyBooked, setisNewlyBooked] = useState(null);
  console.warn(isNewlyBooked);
  useEffect(() => {
    setisNewlyBooked(route.params?.new);
    sethost(route?.params?.host);
    const fetchTripDetail = async () => {
      const data = await getTrip(route.params?.tripId, authState.token);

      settrip(data);
    };

    try {
      fetchTripDetail();
    } catch (error) {
      console.log(error);
    }
    console.warn(host);
  }, [authState]);

  return (
    <SafeAreaView>
      <ScrollView>
        {!newlyBooked && (
          <View className="m-4 justify-center border-b pb-5 border-slate-200 items-center">
            <MaterialIcons name="verified" size={34} color="green" />
            <Text className="text-xl font-bold mt-1">
              Trip Booked Successfully
            </Text>
            <Text className="text-sm text-slate-600 font-bold">
              Trip# 2345-23452345-23452
            </Text>
          </View>
        )}

        <Text className="text-lg font-bold mx-4">Escooter on trip</Text>

        <View className="flex-row border-b  border-slate-200 items-center">
          <Image
            className="m-5 rounded-md"
            style={{ width: 110, height: 110 }}
            source={{
              uri: trip?.eScooterOnTrip.image,
            }}
          />
          <View className="p-2 flex-1 ">
            <Text className="font-bold text-lg  mr-2">
              {trip?.eScooterOnTrip.modelName}
            </Text>
            <View className="flex-row my-2">
              <Text className=" text-lg  mr-2">
                {trip?.eScooterOnTrip.modelName}
              </Text>
            </View>
            <Text>Jul 4 - Jul 6</Text>
          </View>
        </View>
        <View>
         
        </View>

        <View style={{ margin: 18, marginTop: 2 }}>
        {/* <Text className="text-lg  mt-3 font-bold mb-4">
            Trip Pickup Locaton
          </Text> */}
          <MiniMap
            escooter={trip?.eScooterOnTrip}
            latitude={trip?.eScooterOnTrip?.latitude}
            longitude={trip?.eScooterOnTrip?.longitude}
          />
        </View>

        {/* Insurance */}
        <View className=" bg-white mt-1  p-5 ">
          <Text className="font-bold text-lg ">Insurance information</Text>
          <Text className="font-bold mt-3">Torch Trusted Insurance</Text>

          <Text className=" ">
            This electric scooter has been successfully insured under
          </Text>
        </View>
        <View className=" bg-white mt-1  p-5 ">
          <Text className="font-bold text-lg ">Cancellation Policy</Text>

          <Text className=" mt-2">
            Torch users can successfully cancel there trips without incurring
            any additonal charges from a timeframe of up to{" "}
            <Text className="text-blue-800 font-semibold">24h</Text>{" "}
          </Text>
        </View>
        <View className="m-4">
          <CustomButton onPress={() => {
            navigation.navigate("SearchScreen")
          }} style={{ borderRadius: 96 }} color="black">
            Return home
          </CustomButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },

  //toFixed(2)
});
