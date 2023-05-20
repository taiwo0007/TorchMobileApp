import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Title from "./Title";
import Subtitle from "./Subtitle";
import StyledText from "./StyledText";
import CustomButton from "./CustomButton";



export default function LoginPlaceHolder({heading, title, subtitle, onPress}) {
  return (
    <View className="p-5 pt-12">
    <Title>{title}</Title>
   {!!heading && <View className="mt-8">
      <Subtitle>{heading}</Subtitle>
      </View>}
      <View className="mt-3">
        <StyledText>
          {subtitle}
        </StyledText>
      </View>

    <View className="mt-10 rounded-lg">
    <CustomButton onPress={onPress} style={{borderRadius: 13}} color="black">
      <Text>Log in</Text>
    </CustomButton>
  </View>
  </View>
  )
}