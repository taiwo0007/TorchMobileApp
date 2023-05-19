import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { TextInput } from "react-native-gesture-handler";
import Icon from "../../UI/Icon";

const Input = ({ showModal, onShowModal, onCloseModal }) => {


  if(showModal === true) {
    return
  }
  return (
    <View className="bg-slate-200 border border-slate-300 mx-4"  style={styles.inputContainer}>
      <View style={styles.inputTextContainer}>
        <Pressable style={styles.container} onPress={onShowModal}>
          <View className="flex-row justify-center items-center ">
            <Icon color="blue" name="search" size={20} style={styles.icon} />
            <Text style={{ fontFamily: 'gros-bold'}} className="font-medium text-black ml-1">
              Search scooter models
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    color: "black",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 13,


    height: 46,
    marginTop: 16,
    color: "black",

    width: "90%",
    borderRadius: 37,
  },
  inputTextContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginRight: 8,
  },
});

export default Input;
