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

import TownPlanning from "./src/screens/TownPlanning";
import Reservation from "./src/screens/Reservation";
import Booking from "./src/screens/Booking";
import Category from "./src/screens/Category";
import PaymentMethods from "./src/screens/PaymentMethods";

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Group>
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="TownPlanning" component={TownPlanning} />
          <Stack.Screen name="Reservation" component={Reservation} />
          <Stack.Screen name="Booking" component={Booking} />
          <Stack.Screen name="Category" component={Category} />
          <Stack.Screen name="PaymentMethods" component={PaymentMethods} />
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
