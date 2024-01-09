import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import dashboardStyles from "../../../styles/dashboardStyles";

const DashboardLinks = ({ link, title }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={dashboardStyles.dashboardLink}
      onPress={() => navigation.navigate(`${link}`)}
    >
      <View style={dashboardStyles.linkTextPosition}>
        <Text style={dashboardStyles.linkText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DashboardLinks;
