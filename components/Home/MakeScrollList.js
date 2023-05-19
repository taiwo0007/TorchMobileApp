import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

export default function MakeScrollList() {
  return (
    <View className="mb-4">

    <Text style={{ fontFamily: 'gros-bold'}} className="px-3 text-lg font-bold mb-5 mt-4">All Categories</Text>
    <ScrollView className="space-x-4" horizontal showsHorizontalScrollIndicator={false}>
      <View>
        <Image
          style={{ height: 90, width: 190 }}
          className="ml-2 object-cover   rounded-xl"
          source={require("../../assets/images/Make/pureelectric.png")}
        />
        <Text className="text-center text-md font-semibold mt-2">Pure Electric</Text>
      </View>
      <View>
        <Image
      style={{ height: 90, width: 190 }}
      className=" object-cover    rounded-xl"
      source={require("../../assets/images/Make/xiaomi.png")}
        />
        <Text style={{ fontFamily: 'gros-bold'}} className="text-center text-md font-semibold mt-2">Xiaomi</Text>
      </View>
      <View>
        <Image
            style={{ height: 90, width: 190 }}
            className=" object-cover border   rounded-xl"
            source={require("../../assets/images/Make/segway.png")}
        />
        <Text style={{ fontFamily: 'gros-bold'}} className="text-center text-md font-semibold mt-2">Segway</Text>
      </View>
      <View>
        <Image
          style={{ height: 90, width: 190 }}
          className=" object-cover    rounded-xl"
          source={require("../../assets/images/Make/avovo.png")}
        />
        <Text style={{ fontFamily: 'gros-bold'}} className="text-center text-md font-semibold mt-2">Avovo</Text>
      </View>
    </ScrollView>
    </View>
  );
}
