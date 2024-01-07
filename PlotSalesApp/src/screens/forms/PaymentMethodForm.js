import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { addPaymentMethod } from "../../redux/actions/paymentMethodActions";

const PaymentMethodForm = ({ addPaymentMethod }) => {
  const navigation = useNavigation();

  // defining the form data
  const [formData, setFormData] = useState({
    name: "",
  });

  //handling the form data
  const handleChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  // submission logic
  const submitForm = () => {
    // Check if all required fields are filled
    if (!formData.name) {
      console.log("Please enter the name of payment method");
      alert("please enter the name of payment method");
      return;
    }

    // Pass an object with properties name, description, img, and price to addProduct
    const paymentMethodData = {
      name: formData.name,
    };

    // Dispatch the addProduct action
    addPaymentMethod(paymentMethodData);

    // Optionally, you can reset the form after submission
    setFormData({
      name: "",
    });
  };

  // Component
  return (
    <View>
      <Text>Add Payment Method </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
        <Text>X</Text>
      </TouchableOpacity>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Text>
          Payment Method Name<Text>*</Text>
        </Text>
        <TextInput
          value={formData.name}
          onChangeText={(text) => handleChange("name", text)}
          placeholder="Payment Method Name..."
        />
        <TouchableOpacity onPress={submitForm}>
          <Text>Add Payment Method</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const mapDispatchToProps = {
  addPaymentMethod,
};

export default connect(null, mapDispatchToProps)(PaymentMethodForm);
