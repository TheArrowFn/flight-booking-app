import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

const CircleButton = (props) => {
  console.log("-----we need this", props);
  return (
    <View>
      <TouchableOpacity
        style={style.roundButton}
        onPress={() => {
          props.nav.navigate("Confirm Booking");
        }}
      >
        <View style={style.iconStyleView}>
          <Ionicons name={props.iconName1} size={30} color="#535353" />
          <Ionicons name={props.iconName1} size={30} color="white" />
        </View>

        <Text style={style.textStyle}>{props.buttonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  roundButton: {
    marginTop: hp(5),
    borderRadius: 100,
    width: 110,
    height: 110,
    backgroundColor: "#1B1C1C",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#535353",

    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 5.65,

    elevation: 10,
    alignSelf: "center",
  },
  textStyle: {
    fontWeight: "300",
    fontSize: 17,
    color: "#ffffff",
  },
  iconStyleView: {
    flexDirection: "row",
  },
});

export default CircleButton;
