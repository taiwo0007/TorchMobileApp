import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function GridLocations() {
  return (
    <View className="">
  <Text style={{ fontFamily: 'gros-bold'}} className="font-bold text-lg flex-wrap justify-between p-3">Browse by location</Text>
  <View className="grid text-center items-center mx-auto mt-2">
    <View className="flex-row">
      <View style={styles.item}>
        <Text style={styles.tag}>Dublin</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.tag}>Cork</Text>
      </View>
    </View>
    <View className="flex-row">
      <View style={styles.item}>
        <Text style={styles.tag}>Meath</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.tag}>Louth</Text>
      </View>
    </View>
  </View>
</View>

  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  item: {
    width: "44%",
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 13,
    height: 140, // Adjust as needed for the desired height
    borderColor: "grey",
    borderWidth: 1,
    color: "white",
    marginBottom: 3,
    backgroundColor: "black"
  },
  tag: {
    fontSize: 34,
    fontWeight: 800,
    color: "white",

  },
});
