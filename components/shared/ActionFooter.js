import { View, Text } from "react-native";
import React from "react";
import CustomButton from "../../UI/CustomButton";
import NormalButton from "../../UI/NormalButton";

export default function ActionFooter({ children, text, onPress }) {
  return (
    <View className=" px-5 pb-4 border-t border-slate-200 flex-row justify-between items-center">
      {children}
      <NormalButton onPress={onPress}>
        <Text className="font-bold">{text}</Text>
      </NormalButton>
    </View>
  );
}
