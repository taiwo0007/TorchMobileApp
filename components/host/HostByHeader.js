import { View, Text, Image } from "react-native";
import React from "react";

export default function HostByHeader(props) {
  console.log(props);
  return (
    <View className="flex-row items-center justify-between ">
      <View>
        <Text style={{ fontFamily: 'gros-bold'}} className="text-lg font-medium ">
          This Electric Scooter is hosted
        </Text>
        <Text style={{ fontFamily: 'gros-bold'}} className="text-lg font-medium  mt-[-3rem]">
          by {props.hostUser?.firstName}
        </Text>
      </View>
      <View>
        <Image
          className=" h-12 w-12 rounded-full object-contain"
          source={{
            uri: props.hostUser?.profile,
          }}
        />
      </View>
    </View>
  );
}
