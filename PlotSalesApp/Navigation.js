import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import Dashboard from "./src/screens/Dashboard";
import ReservationForm from "./src/screens/forms/ReservationForm";
import BookingForm from "./src/screens/forms/Bookingform";
import TownPlanningForm from "./src/screens/forms/TownPlanningForm";
import PlotCategoryForm from "./src/screens/forms/PlotCategoryForm";
import PaymentMethodForm from "./src/screens/forms/PaymentMethodForm";

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Group>
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            presentation: "transparentModal",
          }}
        >
          <Stack.Screen name="ReservationForm" component={ReservationForm} />
          <Stack.Screen name="BookingForm" component={BookingForm} />
          <Stack.Screen name="TownPlanningForm" component={TownPlanningForm} />
          <Stack.Screen name="PlotCategoryForm" component={PlotCategoryForm} />
          <Stack.Screen
            name="PaymentMethodForm"
            component={PaymentMethodForm}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
