import { View, Text } from "react-native";
import React from "react";

export default function Title({ children, style }) {
  return (
    <Text
      style={[{ fontFamily: "gros-bold", fontSize: 38 }, style]}
      className="font-bold"
    >
      {children}
    </Text>
  );
}
