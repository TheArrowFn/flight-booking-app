import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FlightBookingLandingScreen from "./src/screens/FlightBookingLandingScreen";
import ConfirmFlightBooking from "./src/screens/ConfirmFlightBooking";

const Stack = createStackNavigator();
const MainAppScreens = () => {
  const MyTheme = {
    dark: false,
    colors: {
      primary: "#9F9F9F",
      background: "#F6F7FA",
      card: "#F6F7FA",
      text: "rgb(28, 28, 30)",
      border: "#f8f8f8",
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="Bingo Book">
        <Stack.Screen
          name="Bingo Book"
          component={FlightBookingLandingScreen}
        />
        <Stack.Screen name="Confirm Booking" component={ConfirmFlightBooking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainAppScreens;
