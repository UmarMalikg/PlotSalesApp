import { View, Text } from "react-native";
import React from "react";
import dataStyles from "../../styles/dataStyles";

const SingleData = ({ title, data }) => {
  return (
    <View style={dataStyles.singleData}>
      <Text style={dataStyles.dataTitle}>{title}</Text>
      <Text style={dataStyles.data}>{data}</Text>
    </View>
  );
};

export default SingleData;
