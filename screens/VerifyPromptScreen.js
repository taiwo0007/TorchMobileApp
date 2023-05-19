import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import Title from "../UI/Title";

import RoundedButton from "../UI/RoundedButton";

import InfoCard from "../UI/InfoCard";
import StyledText from "../UI/StyledText";
import CustomButton from "../UI/CustomButton";
import ContainerButton from "../UI/ContainerButton";

const dimensions = Dimensions.get("window");
const imageHeight = Math.round((dimensions.width * 9) / 16);
const imageWidth = dimensions.width;

export default function VerifyPromptScreen({ navigation, route }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: "", // Hide the header title
    });
  });
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/images/verify-sticker.png")}
      />
      <View className=" px-6 pb-2 pt-5">
        <Title style={{ fontSize: 28 }}>Verify account</Title>
      </View>
      <View className="px-6 mb-2">
        <StyledText>
          Explore a range of benifts when you verify your account here on torch
        </StyledText>
      </View>

      <View className="px-6 flex-1">
        <InfoCard
          icon="bicycle-sharp"
          title="Book scooters"
          text="Verified account users can book a host of scooters on our webiste."
        />
        <InfoCard
          icon="ios-man"
          title="Host Program"
          text="Once you are verified you can apply as a host."
        />

           <InfoCard
          icon="bonfire"
          title="Membership"
          text="Users that are verified can subscribe to our plans."
        /> 
  
        
      </View>
      <SafeAreaView className="m-6">
        <RoundedButton
          textStyle={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          color="black"
        >
          <Text>Verify</Text>
        </RoundedButton>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: imageHeight,
    width: imageWidth,
  },
  buttonContainer: {},
});
