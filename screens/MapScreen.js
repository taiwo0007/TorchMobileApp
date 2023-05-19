import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Icon from "../UI/Icon";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import MapCard from "../UI/MapCard";
import ContainerButton from "../UI/ContainerButton";

export default function MapScreen({ navigation, route }) {
  const [escooters, setEscooters] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(route?.params?.escooterList[0]);

  useEffect(() => {
    setEscooters(route?.params?.escooterList);
  }, [escooters]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "transparent",
        shadowColor: "transparent", // on iOS
        elevation: 0, // on Android
      },

      headerLeft: () => (
        <View className=" rounded-full">
          <Icon
            name="arrow-back-sharp"
            size={24}
            color="black"
            onPress={() => navigation.goBack()} // you can use navigation here
          />
        </View>
      ),
      headerTransparent: true,
      title: "", // Add this line
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 53.362393,
          longitude: -6.286712,
          latitudeDelta: 0.1922,
          longitudeDelta: 0.1421,
        }}
        style={styles.map}
      >
        {escooters.map((escooter) => {
          return (
            <Marker
              coordinate={{
                latitude: escooter?.latitude,
                longitude: escooter?.longitude,
              }}
              onPress={() => setSelectedMarker(escooter)}
            >
              <View
                style={
                  [selectedMarker?.id === escooter?.id
                    ? styles.marker
                    : styles.selectedMarker]
                }
              >
                <Text
                  style={
                  [ { fontFamily: "gros-bold" }, selectedMarker?.id === escooter?.id
                      ? styles.selectedMarkerText
                      : styles.markerText
                  ]}
                >
                  €{escooter?.cost?.toFixed(0)}
                </Text>
              </View>
            </Marker>
          );
        })}
      </MapView>
      <View style={styles.bottomContainer}>
        {selectedMarker && (
      
            <MapCard  data={selectedMarker} title="This is a dummy card" />
       
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    padding: 10,
    alignItems: "center",
  },

  marker: {
    padding: 6,
    paddingHorizontal: 13,
    backgroundColor: "black",
    borderRadius: 19,
    color: "white",
    shadowColor: "#000",
    flex: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  selectedMarker: {
    padding: 6,
    paddingHorizontal: 13,
    backgroundColor: "white",
    borderRadius: 19,
    color: "black",
    shadowColor: "#000",
    flex: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  selectedMarkerText: {
    color: "white",
    fontFamily: "gros-black",
    fontWeight: 900,
  },
  markerText: {
    color: "black",
    fontFamily: "gros-black",
    fontWeight: 900,
  },
});
