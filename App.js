import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, LogBox } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import TabNavigator from "./navigations/TabNavigator";
import HomeStack from "./navigations/HomeStack";
import { PaperProvider } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import store from "./store/index";
import { PersistGate } from "redux-persist/integration/react";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore } from "redux-persist";
import { StripeProvider } from "@stripe/stripe-react-native";

const navTheme = DefaultTheme;
navTheme.colors.background = "white";
console.disableYellowBox = true;
let persistor = persistStore(store);
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function App() {
  const [fontsLoaded] = useFonts({
    "gros-bold": require("./assets/fonts/BasisGrotesqueArabicPro-Bold.ttf"),
    "gros-light": require("./assets/fonts/BasisGrotesqueArabicPro-Light.ttf"),
    "gros-medium": require("./assets/fonts/BasisGrotesqueArabicPro-Medium.ttf"),
    "gros-regular": require("./assets/fonts/BasisGrotesqueArabicPro-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StripeProvider
      publishableKey="pk_test_51M5pMwBapNSScoYvl9KdhcEEvyCUp41XXVqqzOKxQo7XAzXlm42PnZQIOvnshRre0hYUIpzEk22qz2i4gEfODZkI00AjRfjVul"
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
    >
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <StatusBar barStyle="auto" />
            <PaperProvider>
              <NavigationContainer>
                <HomeStack />
              </NavigationContainer>
            </PaperProvider>
          </PersistGate>
        </Provider>
      </StripeProvider>
    </>
  );
}

const styles = StyleSheet.create({});
