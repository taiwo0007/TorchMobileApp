import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "./Icon";

export default function InfoCard({ children, title, text, icon }) {
  return (
    <View style={styles.container} className="flex-row my-1 bg-white justify-between border-slate-200 rounded-2xl border p-4 items-center">
      <View style={styles.innerContainer}>
        <Text tyle={{ fontFamily: "gros-bold" }} className="text-lg font-semibold">
        {title}
        </Text>

        <Text
          style={{ fontFamily: "gros-light" }}
          className="text-slate-600 font-light mt-1"
        >
          {text}
        </Text>
      </View>
      <View>
        {children}
        <Icon color="black" name={icon} size={31} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    innerContainer: {
    width: "67%",
  },
  container: {
    backgroundColor: 'white',
    // iOS Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: .17,
    shadowRadius: 4.2,
    // Android Shadow
    elevation: 4,
  },
});
