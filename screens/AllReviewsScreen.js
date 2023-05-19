import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "../UI/Icon";
import ReviewItem from "../UI/ReviewItem";

export default function AllReviewsScreen({ navigation, route }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Ratings & Reviews",
      headerStyle: {
        backgroundColor: "white",
        shadowColor: "transparent", // on iOS
        elevation: 0, // on Android
        fontFamily: "gros-bold",
        borderBottomWidth: 0,
        borderWidth: 0,
      },
      headerShadowVisible: false, // applied here
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
    });
  }, [navigation]);

  const { rating, reviews } = route?.params;

  return (
    <View className="mb-22 flex-1">
      <SafeAreaView >
        <View className="flex-row items-center px-4 py-3">
          <Icon name="star" color="black" size={15} />
          <Text className="text-2xl ml-1" style={{ fontFamily: "gros-bold" }}>
            {rating}
          </Text>
          <Text className="text-2xl mx-2" style={{ fontFamily: "gros-bold" }}>
            ·
          </Text>
          <Text className="text-2xl ml-1" style={{ fontFamily: "gros-bold" }}>
            {reviews.length} reviews
          </Text>
        </View>
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>

        {reviews?.map((reviewItem) => {
          return <ReviewItem key={reviewItem.id} review={reviewItem}/>
        })}
          
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
