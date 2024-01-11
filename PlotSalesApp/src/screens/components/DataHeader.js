import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import dataStyles from "../../styles/dataStyles";

const DataHeader = ({ headerTitle }) => {
  const navigation = useNavigation();
  return (
    <View style={dataStyles.headerPosition}>
      <View style={dataStyles.dataHeader}>
        <View>
          <Text style={dataStyles.hederTitle}>{headerTitle}</Text>
        </View>
        <View>
          <TouchableOpacity
            style={dataStyles.button}
            onPress={() => navigation.navigate("Dashboard")}
          >
            <Text style={dataStyles.buttonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DataHeader;
