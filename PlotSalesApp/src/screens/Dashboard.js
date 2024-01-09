import { View } from "react-native";
import React from "react";
import dashboardStyles from "../styles/dashboardStyles";
import DashboardLinks from "./forms/components/DashboardLinks";

const Dashboard = () => {
  return (
    <View style={dashboardStyles.dashboard}>
      <DashboardLinks title={`Add Reservation`} link={`ReservationForm`} />
      <DashboardLinks title={`Add Plot Booking`} link={`BookingForm`} />
      <DashboardLinks title={`Add Town Planning`} link={`TownPlanningForm`} />
      <DashboardLinks title={`Add Plot Category`} link={`PlotCategoryForm`} />
      <DashboardLinks title={`Add Payment Method`} link={`PaymentMethodForm`} />
      <DashboardLinks title={`Town Planning`} link={`TownPlanning`} />
      <DashboardLinks title={`Reservation`} link={`Reservation`} />
      <DashboardLinks title={`Plot Booking`} link={`Booking`} />
      <DashboardLinks title={`Category`} link={`Category`} />
      <DashboardLinks title={`Payment Methods`} link={`PaymentMethods`} />
    </View>
  );
};

export default Dashboard;
