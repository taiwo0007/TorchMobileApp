import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStripe } from "@stripe/stripe-react-native";
import CustomButton from "../UI/RoundedButton";
import { SafeAreaView } from "react-native";
import * as Haptics from 'expo-haptics';

export default function BookTripScreen({ route, navigation }) {
  const [escooter, setEscooter] = useState({});
  const [hostInsurance, setHostInsurance] = useState(null);
  const authState = useSelector((state) => state.auth);

  const customAppearance = {
    font: {
      family:
        Platform.OS === 'android' ? 'avenirnextregular' : 'AvenirNext-Regular',
    },
    shapes: {
      borderRadius: 12,
      borderWidth: 0.5,
    },
    primaryButton: {
      shapes: {
       borderRadius: 20,
      },
    },
    colors: {
      primary: 'black',
      background: 'black',
      componentBackground: '#f3f8fa',
      componentBorder: '#f3f8fa',
      componentDivider: '#000000',
      primaryText: '#000000',
      secondaryText: '#000000',
      componentText: '#000000',
      placeholderText: '#73757b',
    },
   };

  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  const fetchPaymentSheetParams = async () => {
    const responseb = { cost: 20.99 }; // replace 10 with your desired cost value

    const response = await fetch(`http://192.168.1.12:8080/payment-sheet`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(responseb), // stringify the costObject and send it in the request body

    });
    const { paymentIntent, ephemeralKey, customer } = await response.json();

    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const initializePaymentSheet = async () => {
    const { paymentIntent, ephemeralKey, customer, publishableKey } =
      await fetchPaymentSheetParams({
       

      });

    const { error } = await initPaymentSheet({
      merchantDisplayName: "Torch, Inc.",
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: "Jane Doe",
      },
      appearance: {
      shapes: {
        borderRadius: 12,
        borderWidth: 0.5,
      },
      primaryButton: {
        shapes: {
         borderRadius: 10,
         color: "#000000"
        },
      },
      colors: {
        primary: '#000000',
        background: '#ffffff',
        componentBackground: '#f3f8fa',
        componentBorder: '#f3f8fa',
        componentDivider: '#000000',
        primaryText: '#000000',
        secondaryText: '#000000',
        componentText: '#000000',
        placeholderText: '#73757b',
      },}
    });
    if (!error) {
      setLoading(true);
      
    }
  };

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      console.log(`Error code: ${error.code}`, error.message);
    } else {
      console.log("Success", "Your order is confirmed!");
      Haptics.notificationAsync(
        Haptics.NotificationFeedbackType.Success
      )
      navigation.reset({
        index: 0,
        routes: [{ name: 'TripDetailScreen' }], // replace 'ConfirmationScreen' with the name of your actual confirmation screen
      });
    }
  };
  useEffect(() => {
    initializePaymentSheet();
  }, []);

  useEffect(() => {
    console.warn(route.params.host);
    if (route && route.params) {
      setEscooter(route.params.escooter);
      setHostInsurance(route.params?.host?.insurance);
    }
  }, [navigation, route]);

  return (
    <>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        className="bg-slate-200"
      >
        <View
          className="flex-row border  border-slate-200 items-center"
          style={styles.card}
        >
          <Image
            className="m-5 rounded-md"
            style={{ width: 110, height: 110 }}
            source={{
              uri: escooter?.image,
            }}
          />
          <View className="p-2 flex-1 ">
            <Text className="font-bold text-lg  mr-2">
              {escooter?.modelName}
            </Text>
            <View className="flex-row my-2">
              <Text className=" text-lg  mr-2">{escooter?.modelName}</Text>
            </View>
            <Text className="">Jul 4 - Jul 6</Text>
          </View>
          <View className="justify-end "></View>
        </View>
        {/* Price details */}
        <View className="flex-row border mt-1 p-5 border-slate-200 bg-white ">
          <View className="flex-1 ">
            <View className="flex-row mb-6 justify-between items-center rounded-lg verflow-hidden">
              <Text className="font-bold text-lg ">Trip Cost</Text>
              {authState.user?.accountType !== null && (
                <View className="font-bold text-xs justify-center items-center flex-row bg-black rounded-lg overflow-hidden text-center p-1 px-3 text-white 2">
                  <Text className="font-bold text-xs bg-black rounded-lg overflow-hidden  text-center text-white ">
                    {authState.user?.accountType} discount
                  </Text>
                </View>
              )}
            </View>
            <View className="border-b pb-4 border-slate-300">
              <View className="flex-row justify-between my-2">
                <Text>€44.56 x 5 days</Text>
                <Text>€44.34</Text>
              </View>
              <View className="flex-row justify-between my-2">
                <Text>Proccessing Fee</Text>
                <Text>€20.00</Text>
              </View>
              <View className="flex-row justify-between my-2">
                <Text>Insurance</Text>
                <Text>€34.00</Text>
              </View>
              <View className="flex-row justify-between my-2">
                <Text>VAT @ 20%</Text>
                <Text>€34.00</Text>
              </View>
            </View>
            {/* Trip Cost */}
            <View className="flex-row justify-between pt-3 my-2">
              <Text className="font-bold ">Total</Text>
              <Text className="font-bold">€343.00</Text>
            </View>
          </View>
        </View>
        <View className=" bg-white mt-1  p-5 ">
          <Text className="font-bold text-lg mb-2">Trip Dates</Text>

          <Text className=" ">
            12 June 2020 to 30th July 2021{" "}
            <Text className="mt-2 text-blue-800 font-semibold"></Text>{" "}
          </Text>
        </View>
        {/* Insurance */}
        <View className=" bg-white mt-1  p-5 ">
          <Text className="font-bold text-lg ">Insurance information</Text>
          <Text className="font-bold mt-3">Torch Trusted Insurance</Text>

          <Text className=" ">
            This electric scooter has been successfully insured under{" "}
            <Text className="text-blue-800 font-semibold">
              {hostInsurance?.name}
            </Text>{" "}
          </Text>
        </View>
        <View className=" bg-white mt-1  p-5 ">
          <Text className="font-bold text-lg ">Cancellation Policy</Text>

          <Text className=" mt-2">
            Torch users can successfully cancel there trips without incurring
            any additonal charges from a timeframe of up to{" "}
            <Text className="text-blue-800 font-semibold">24h</Text>{" "}
          </Text>
        </View>
      </ScrollView>
      <SafeAreaView className="mx-4 mt-3">
          <CustomButton
          style={{borderRadius:90}}
            disabled={!loading}
            onPress={openPaymentSheet}
            color="black"
          >
            Pay
          </CustomButton>
      
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },

  //toFixed(2)
});
