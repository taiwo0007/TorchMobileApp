import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState, useEffect } from "react";
import AuthInput from "./AuthInput";
import CustomButton from "../../UI/CustomButton";
import { login, signup } from "../../util/auth-http";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import AuthPasswordInput from "./AuthPasswordInput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function SignUpForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const dispatch = useDispatch();
  const authState = useSelector((state) => state);
  const navigation = useNavigation();

  const onNavigateToLoginHandler = () => {
    navigation.replace("LogInScreen")
  }

  function signUpHandler() {
    const authenticateUser = async () => {
      console.log(enteredEmail);
      console.log(password);

      const data = await signup(enteredEmail, password);

      const {
        accountType,
        email,
        expiresAt,
        isHost,
        authToken,
        hostID,
        isVerified,
      } = data;

      dispatch(
        authActions.login({
          accountType,
          email,
          expiresAt,
          isHost,
          authToken,
          hostID,
          isVerified,
        })
      )
    };

    try {
      authenticateUser();
      navigation.navigate("HomeScreen");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log("before auth state", authState);

    if (authState) {
      console.log("the auth state", authState);

      const settedStorage = AsyncStorage.setItem("auth", JSON.stringify(authState))
        .then(() => console.log("Stored state successfully"))
        .catch((error) => console.error("Error storing state:", error));

        AsyncStorage.getItem("auth")
        .then((data) => console.log("Stored return successfully" +data))
        .catch((error) => console.error("Error storing state:", error));
    }
  }, [authState]);

  return (
    <View className="p-4 flex-1">
      <AuthInput onUpdateValue={setEnteredEmail} label="Email" />
      <AuthPasswordInput
        onUpdateValue={setPassword}
        isPassword={true}
        label="Password"
      />
      <AuthPasswordInput
        onUpdateValue={setPasswordAgain}
        isPassword={true}
        label="Re-enter password"
      />
      <Text className="text-xs my-2 px-2">
        We do not use your email address for anthing outside of our privacy
        policy
      </Text>
      <CustomButton
        textStyle={{ color: "white", borderColor: "black" }}
        style={{
          borderRadius: 10,
          paddingVertical: 16,
          marginTop: 10,
          backgroundColor: "#4EC5F1",
          color: "white",
        }}
        color="black"
        onPress={signUpHandler}
      >
        Sign up
      </CustomButton>
      

      <View className="my-7" style={styles.container}>
        <View style={styles.line} />
        <Text style={[styles.text, { fontFamily: "gros" }]}>or</Text>
        <View style={styles.line} />
      </View>

      <CustomButton
        style={{ borderRadius: 10, paddingVertical: 16, marginTop: 15 }}
        color="black"
        onPress={onNavigateToLoginHandler}
      >
        Log in
      </CustomButton>
      <View className="flex-row justify-center mt-auto">
        <Image
        className="mb-9"
          style={{ width: 75, height: 25 }}
          source={require("../../assets/images/torchlogoblack.png")}
        />
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "grey",
  },
  text: {
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10,
  },
});
