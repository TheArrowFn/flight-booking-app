import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MainImageShow from "../components/mainImageComponent";
import SelectPathStack from "../components/selectPathStack";
import CircleButton from "../components/circleButton";

const FlightBookingLandingScreen = (props) => {
  return (
    <View style={style.mainViewStyle}>
      <MainImageShow />
      <SelectPathStack />
      <CircleButton
        iconName1="ios-arrow-forward"
        buttonLabel="Next"
        nav={props.navigation}
      />
    </View>
  );
};

const style = StyleSheet.create({
  mainViewStyle: {
    alignContent: "flex-start",
  },
});

export default FlightBookingLandingScreen;
