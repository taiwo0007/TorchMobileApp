import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import Icon from "./Icon";
import { useNavigation } from "@react-navigation/native";


export default function MapCard({onPress, title, data }) {
    const navigation = useNavigation()
  return (
    <Pressable  onPress={() => {
        navigation.navigate("EscooterDetailScreen", {
          modelName: data.modelName,
          cost: data.cost,
          image: data.image,
          id: (data.key || data.id),
        });
      }}>

 
    <View className="flex-row flex-1 w-[93%] items-center" style={styles.card}>
      <Image
        className="rounded-l-xl"
        style={{ width: 110, height: 110 }}
        source={{
          uri: data?.image,
        }}
      />
      <View className="p-2 flex-1 ">
        <Text className="font-bold text-md ">{data?.modelName}</Text>
        <View className="flex-row my-2">
          <View className="flex-row  items-center">
            <Icon name="star" color="blue" size={16} />
            <Text className="font-bold text-sm ml-1 mr-2">
              {data?.rating?.toFixed(2)} -
            </Text>
          </View>
          <Text className="font-bold text-sm">{data?.trips} trips</Text>
        </View>
        <Text className="  ">{data?.county}, {data?.country}</Text>

      </View>
      <View className="justify-end ">
        <View className="p-3 items-end justify-end justify-self-end ">
        <Icon name="heart-outline" color="blue" size={16} />
        </View>
        <View className="p-3 pt-7 items-end justify-end justify-self-end">
          <Text className="font-bold text-md">€{data?.cost.toFixed(0)}/day</Text>
        </View>
        
      </View>
    </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    flex: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  //toFixed(2)
});
