import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Dashboard = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Hello from the Dashboard</Text>
      <TouchableOpacity onPress={() => navigation.navigate("ReservationForm")}>
        <Text>Add Reservation</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("BookingForm")}>
        <Text>Add Plot Booking</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("TownPlanningForm")}>
        <Text>Add TownPlanning</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("PlotCategoryForm")}>
        <Text>Add Plot Category</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("PaymentMethodForm")}
      >
        <Text>Add Payment Method</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
