import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";

export default function AuthPasswordInput({ label, isPassword, onUpdateValue }) {
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
        autoCapitalize="none" 
        style={{ height: 62 }}
        selectionColor="black"
        autoCorrect={false}
        activeOutlineColor="black"
        textColor="black"
        secureTextEntry={true}
        onChangeText={onChangeTextHandler}
      />
    </View>
  );
}
