import React, { useState } from "react";
import { StyleSheet, View, Text, Switch } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialIcons } from "@expo/vector-icons";
import CardListElement from "./cardListElement";
const ConfirmationCard = () => {
  let headerText = "Flight details";
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={style.cardStyle}>
      <Text style={style.textStyleLocation}>{headerText}</Text>
      <View style={style.textViewStyle}>
        <CardListElement
          textValue="Round Trip"
          iconName="backup-restore"
          info=""
        />
        <Switch
          trackColor={{ false: "#767577", true: "#3e3e3e" }}
          thumbColor={isEnabled ? "#81b0ff" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={style.switchStyle}
        />
      </View>
      <CardListElement
        textValue="26 March 2020 ,19:48"
        iconName="airplane-takeoff"
        info="DEPARTURE"
      />
      <CardListElement
        textValue="30 March 2020, 13:30"
        iconName="airplane-landing"
        info="RETURN"
      />
      <CardListElement
        textValue="Business"
        iconName="briefcase-outline"
        info="CLASS"
      />
      <CardListElement
        textValue="2 Person"
        iconName="account-outline"
        info="PASSENGER"
      />
    </View>
  );
};

const style = StyleSheet.create({
  cardStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    height: hp("44%"),
    width: wp("75%"),
    backgroundColor: "#ffffff",
    borderRadius: 25,
    alignSelf: "center",
    padding: 11,
    marginTop: 40,
  },
  textStyleLocation: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#1B1C1C",
    marginLeft: 10,
    marginBottom: 20,
  },
  textViewStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  switchStyle: {
    marginLeft: wp("20%"),
  },
});

export default ConfirmationCard;
