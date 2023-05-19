import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "./Icon";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 


export default function InfoCardDark({ children, title, text, icon , onPress, cta, color }) {
  return (
    <View style={[styles.container, {color: color}]} className="flex-row my-1 bg-black justify-between border-slate-200 rounded-xl border p-4 items-center">
      <View style={styles.innerContainer}>
        <Text style={{ fontFamily: "gros-bold", lineHeight: 20 }} className="text-lg text-white font-semibold">
        {title}
        </Text>

       {text && <Text
          style={{ fontFamily: "gros" }}
          className="text-white  mt-1"
        >
          {text}
        </Text>}
       {cta && <View className="flex-row mt-4 items-center">
           <Text
          style={{ fontFamily: "gros-bold" }}
          className="text-white mr-1"
        >
          {cta} 
        </Text>
       <AntDesign name="arrowright" size={17} color="white" />

        </View> }
        
      </View>
      <View className="">
        {children}
        <MaterialCommunityIcons color="white" name={icon} size={31} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    innerContainer: {
    width: "67%",
  },
  container: {
    backgroundColor: "black",
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
