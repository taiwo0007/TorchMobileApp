import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import Icon from "./Icon";

export default function TripCard({ trip, route, navigation }) {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("TripDetailScreen", { tripId: trip?.id });
      }}
    >
      <View
        className="flex-row border my-2 border-slate-200 items-center"
        style={styles.card}
      >
        <Image
          className="m-4 rounded-md"
          style={{ width: 110, height: 110 }}
          source={{
            uri: trip?.eScooterOnTrip?.image,
          }}
        />
        <View className="p-2 ml-1 flex-1 ">
          <Text className="font-semibold text-slate-500  text-md ">
            Trip #{trip?.tripId}
          </Text>
          <View className="flex-row my-2">
            <Text className="font-bold text-lg  mr-2">
              {trip?.eScooterOnTrip.modelName}
            </Text>
          </View>
          <Text className="  ">Jul 4 - Jul 6</Text>
        </View>
        <View className="justify-end "></View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.11,
    shadowRadius: 2.14,
    elevation: 5,
  },

  //toFixed(2)
});
