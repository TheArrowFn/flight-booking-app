import React from "react";
import { StyleSheet, View } from "react-native";
import ConfirmationTop from "../components/confirmationTop";
import ConfirmationCard from "../components/confirmationCard";
import CircleButton from "../components/circleButton";

const ConfirmFlightBooking = () => {
  return (
    <View>
      <ConfirmationTop />
      <ConfirmationCard />
      <CircleButton iconName1="ios-arrow-forward" buttonLabel="Go" />
    </View>
  );
};
const styles = StyleSheet.create({});

export default ConfirmFlightBooking;
