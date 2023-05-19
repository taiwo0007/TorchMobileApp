import {
  View,
  Text,
  Modal,
  SafeAreaView,
  Pressable,
  StatusBar,
  StyleSheet,
} from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Icon from "../../UI/Icon";
import CustomButton from "../../UI/CustomButton";
import { useNavigation } from "@react-navigation/native";

export default function SearchModal({setShowModal, isVisible, onCloseModal }) {

const navigation = useNavigation()
  function onSubmitHandler(){

    setShowModal(false);
    navigation.navigate("EScooterResultsScreen",
    {
      tripStart: "2020",
      tripEnd: "2020",
      location: "Dublin"
    })
    
  }
  return (
    <Modal animationType="fade" style={styles.modal} visible={isVisible}>
      <SafeAreaView className="flex-1">
        <View className="flex-1">
          <StatusBar style="black" barStyle="black" />

          <View style={styles.closeButtonContainer}>
            <Icon size={29} name="close" onPress={onCloseModal} />
          </View>
          <TextInput
            autoFocus={true}
            style={styles.input}
            onSubmitEditing={onSubmitHandler}
            placeholderTextColor="black"
            
            placeholder="What are you looking for?"
          />
        </View>

        <CustomButton>Search</CustomButton>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    // Add any additional modal styles here
    // For example: flex: 1, backgroundColor: "white"
  },
  closeButtonContainer: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderBottomColor: "black",
  },
});
