import { View, Text, StyleSheet, Image } from "react-native";

import React, { useEffect, useLayoutEffect, useState } from "react";

import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import MapCard from "../../UI/MapCard";

export default function MiniMap({ latitude, longitude, escooter }) {
  const [selectedMarker, setSelectedMarker] = useState(null);

  return (
    <View className="items-center" style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: escooter?.latitude,
            longitude: escooter?.longitude,
          }}
          onPress={() => setSelectedMarker(escooter)}
        >
          <View className="">
            <Image
              lassName=""
              style={{ width: 60, height: 60 }}
              source={require("../../assets/images/marker.png")}
            />
          </View>
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: 250,
    borderRadius: 14,
    margin: "auto"
  },
  container: {
    margin: "auto"
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
