import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Title from "../../UI/Title";
import Subtitle from "../../UI/Subtitle";
import StyledText from "../../UI/StyledText";
import CustomButton from "../../UI/CustomButton";



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