import { ScrollView, View } from "react-native";
import React from "react";
import dashboardStyles from "../styles/dashboardStyles";
import DashboardLinks from "./components/DashboardLinks";

const Dashboard = () => {
  const FirstLogo = require("../../assets/images/SimpleLogo.png");
  const SecondLogo = require("../../assets/images/anLogo.jpg");

  return (
    <ScrollView>
      <View style={dashboardStyles.dashboard}>
        <DashboardLinks
          title={`Add Reservation`}
          link={`ReservationForm`}
          boxCol={`#01539d`}
          textBcCol={`#eea47f`}
          logo={FirstLogo}
        />
        <DashboardLinks
          title={`Add Plot Booking`}
          link={`BookingForm`}
          boxCol={`#2f3d7e`}
          textBcCol={`#faeaeb`}
          logo={SecondLogo}
        />
        <DashboardLinks
          title={`Add Town Planning`}
          link={`TownPlanningForm`}
          boxCol={`#101920`}
          textBcCol={`#ffe715`}
          logo={FirstLogo}
        />
        <DashboardLinks
          title={`Add Plot Category`}
          link={`PlotCategoryForm`}
          boxCol={`#fa6166`}
          textBcCol={`#fce77e`}
          logo={SecondLogo}
        />
        <DashboardLinks
          title={`Add Payment Method`}
          link={`PaymentMethodForm`}
          boxCol={`#4832d5`}
          textBcCol={`#ccf281`}
          logo={FirstLogo}
        />
        <DashboardLinks
          title={`Town Planning`}
          link={`TownPlanning`}
          boxCol={`#317874`}
          textBcCol={`#e2d2f9`}
          logo={SecondLogo}
        />
        <DashboardLinks
          title={`Reservation`}
          link={`Reservation`}
          boxCol={`#e2d2f9`}
          textBcCol={`#fcf6f6`}
          logo={FirstLogo}
        />
        <DashboardLinks
          title={`Plot Booking`}
          link={`Booking`}
          boxCol={`#8aaae5`}
          textBcCol={`#ffffff`}
          logo={SecondLogo}
        />
        <DashboardLinks
          title={`Category`}
          link={`Category`}
          boxCol={`#ff69b3`}
          textBcCol={`#01ffff`}
          logo={FirstLogo}
        />
        <DashboardLinks
          title={`Payment Methods`}
          link={`PaymentMethods`}
          boxCol={`#ee4e34`}
          textBcCol={`#fcedda`}
          logo={SecondLogo}
        />
      </View>
    </ScrollView>
  );
};

export default Dashboard;
