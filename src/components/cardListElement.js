import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CardListElement = (props) => {
  return (
    <View>
      <View style={style.textViewStyle}>
        <MaterialCommunityIcons
          name={props.iconName}
          size={24}
          color="#3F3D56"
        />
        <Text style={style.textStyle}>{props.textValue}</Text>
      </View>
      <Text style={style.textStyleMin}>{props.info}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontWeight: "500",
    fontSize: 15,
    color: "#3F3D56",
    marginLeft: 10,
  },
  textStyleMin: {
    fontWeight: "500",
    fontSize: 11,
    color: "#9F9F9F",
    marginLeft: 35,
  },
  textViewStyle: {
    marginTop: 10,
    flexDirection: "row",
  },
});

export default CardListElement;
