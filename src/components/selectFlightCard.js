import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialIcons } from "@expo/vector-icons";
const SelectFlightCard = (props) => {
  return (
    <View style={cardStyle(props.disable)}>
      <View style={style.iconStyleView}>
        <MaterialIcons name={props.iconName} size={24} color="black" />
        <Text style={style.textStyleMin}>{props.title}</Text>
      </View>
      <Text style={style.textStyleLocation}>{props.location}</Text>
    </View>
  );
};
const cardStyle = (cardFlag) => {
  let bgColor = cardFlag ? "#ffff" : "#ffffff";
  let shadowLevel = cardFlag ? 2.27 : 6.27;
  let shadowOpacityLevel = cardFlag ? 0.2 : 0.44;
  let shadowLvelAndroid = cardFlag ? 6 : 10;
  return {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: shadowOpacityLevel,
    shadowRadius: shadowLevel,

    elevation: shadowLvelAndroid,
    height: hp("12%"),
    width: wp("80%"),
    backgroundColor: bgColor,
    borderRadius: 17,
    marginBottom: 18,
    alignSelf: "center",
    padding: 11,
  };
};

const style = StyleSheet.create({
  cardStyle: {},
  iconStyleView: {
    flexDirection: "row",
  },
  textStyleMin: {
    fontWeight: "500",
    fontSize: 15,
    color: "#9F9F9F",
    marginLeft: 8,
  },
  textStyleLocation: {
    fontWeight: "500",
    fontSize: 18,
    color: "#000000",
    marginTop: 10,
  },
});

export default SelectFlightCard;
