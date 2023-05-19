import { View, Text } from "react-native";
import React from "react";

export default function StyledText({ children }) {
  return (
    <Text
      className="text-gray-100"
      style={{  fontSize: 16, lineHeight: 25 }}
    >
      {children}
    </Text>
  );
}
