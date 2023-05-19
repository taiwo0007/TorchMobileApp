import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native";
import BookedTripScreen from "../screens/HostTripsScreen";
import CurrentTripsScreen from "../screens/CurrentTripsScreen";
import { useSelector } from "react-redux"; // import useSelector hook from Redux
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BookTripScreen from "../screens/BookTripScreen";
import TripsScreen from "../screens/TripsScreen";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

export default function TripsTopTabs() {
  const authState = useSelector((state) => state.auth); // Access the state from Redux
  return (
    <>
    {/* Show normal screen */}
      {authState.isAuthenticated === false && (
        <Stack.Navigator
          screenOptions={{
            tabBarStyle: { borderTopColor: "grey" },
            tabBarActiveTintColor: "black",
            tabBarVisible: false,
          }}
        >
          <Stack.Screen
            name="TripsScreen"
            component={TripsScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      )}

      <SafeAreaView style={{ flex: 1 }}>
        {authState.isAuthenticated && (
          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: { fontWeight: 800, fontFamily: "gros-bold" }, // Set the label style
              tabBarActiveTintColor: "#007AFF", // Change active title color
              tabBarInactiveTintColor: "grey",
              indicatorStyle: { backgroundColor: "red", height: "100%" },
              tabBarItemStyle: {
                fontWeight: 900,
              },
            }}
          >
            <Tab.Screen
              name="CurrentTripsScreen"
              component={CurrentTripsScreen}
              options={{
                title: "Your trips",
                indicatorStyle: { backgroundColor: "red", height: "100%" },
              }}
            />
            <Tab.Screen
              name="BookedTripScreen"
              component={BookedTripScreen}
              options={{ title: "HOST TRIPS" }}
            />
          </Tab.Navigator>
        )}
      </SafeAreaView>
    </>
  );
}
