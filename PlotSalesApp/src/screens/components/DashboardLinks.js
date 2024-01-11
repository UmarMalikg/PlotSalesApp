import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import dashboardStyles from "../../styles/dashboardStyles";

const DashboardLinks = ({ link, title, boxCol, textBcCol, logo }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[dashboardStyles.dashboardLink, { backgroundColor: `${boxCol}` }]}
      onPress={() => navigation.navigate(`${link}`)}
    >
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={`${logo}`} style={{ width: 100, height: 100 }} />
      </View>
      <View
        style={[
          dashboardStyles.linkTextPosition,
          { backgroundColor: `${textBcCol}` },
        ]}
      >
        <Text style={dashboardStyles.linkText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DashboardLinks;
