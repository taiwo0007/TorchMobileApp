import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";

export default function AuthInput({ label, isPassword, onUpdateValue }) {
  const [text, setText] = React.useState("");

  function onChangeTextHandler(enteredText) {
    onUpdateValue(enteredText);
  }

  return (
    <View className="rounded-xl my-2">
      <TextInput
        label={label}
        theme={{ roundness: 10 }}
        placeholderTextColor="black"
        className="bg-white"
        mode="outlined"
        outlineColor="grey"
        style={{ height: 62 }}
        keyboardType="email-address"
        selectionColor="black"
        autoCorrect={false}
        autoCapitalize="none" 
        activeOutlineColor="black"
        textColor="black"
        onChangeText={onChangeTextHandler}
      />
    </View>
  );
}
