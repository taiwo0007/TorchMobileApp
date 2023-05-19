import {
  View,
  Text,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { findEscooters } from "../util/escooter-http";
import EscooterCard from "../components/escooter/EscooterCard";
import EscooterCardLarge from "../components/escooter/EscooterCardLarge";
import { Ionicons } from "@expo/vector-icons";
import RounedContainerButton from "../UI/RounedContainerButton";
import Loader from "../components/shared/Loader";
export default function EScooterResultsScreen({ navigation }) {
  const authState = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);

  const mapNavigationHandler = () => {

   navigation.navigate("MapScreen",
   {
    escooterList,

   })

  }

  const [escooterList, setEscooterList] = useState([]);

  const renderScooterCard = (scooters) => {
    return <EscooterCard data={scooters.item} />;
  };

  useEffect(() => {
    const findEscootersFromApi = async () => {
      const escooters = await findEscooters(authState.token);

      setEscooterList(escooters);

    };

    try {
      findEscootersFromApi();
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  }, []);

  if(loading === true){

    return (
      <View className="flex-1 flex-row h-40 items-center justify-center">
        <Text>
          <Loader size="medium" />
        </Text>
      </View>
    )
  }
  return (
    <View className="relative z-20">
      <ScrollView className="mx-auto relative">
        {escooterList.map((escooter) => {
          return <EscooterCardLarge data={escooter} />;
        })}
      </ScrollView>
      
      <View style={{
        left: "35%",
        top: 660,
        bottom: 10,
        borderRadius: 10,
      }} className="absolute  overflow-hidden">

        <RounedContainerButton onPress={mapNavigationHandler}>
          <View className="flex-row items-center bg-black py-3 px-5 w-22 ">
            <Text className="text-white font-bold text-lg mr-2">Map</Text>
            <Ionicons name="map" size={24} color="white" />
          </View>
        </RounedContainerButton>
      </View>
    </View>
  );
}
