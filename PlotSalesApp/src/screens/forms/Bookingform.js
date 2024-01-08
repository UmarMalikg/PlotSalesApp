import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import formStyles from "../../styles/formStyles";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { fetchCategoryData } from "../../redux/actions/categoryActions";
import { fetchPaymentMethodData } from "../../redux/actions/paymentMethodActions";
import { addBooking } from "../../redux/actions/bookingActions";
import InputField from "./components/InputFieldWrapper";

const ReservationForm = ({
  addBooking,
  fetchCategoryData,
  fetchPaymentMethodData,
  categoryData,
  paymentMethodData,
}) => {
  const navigation = useNavigation();

  // for hovering effect
  const [isHovered, setIsHovered] = useState(false);

  const handlePressIn = () => {
    setIsHovered(true);
  };

  const handlePressOut = () => {
    setIsHovered(false);
  };

  // defining the form data
  const [formData, setFormData] = useState({
    blockName: "",
    plotNo: "",
    purchaserName: "",
    guardianName: "",
    cnic: "",
    streetNo: "",
    address: "",
    mobileNo: "",
    category: "",
    plotSize: "",
    ratePerMarla: "",
    extraPaymentFactor: "",
    extraFactorPaymenyt: "",
    totalPlotPayment: "",
    paymentMode: "",
    bankName: "",
    branchName: "",
    paymentDate: "",
    amountRecieved: "",
    balanceAmount: "",
    balanceAmountDueDate: "",
  });

  // fetching the category and payemt method Data
  useEffect(() => {
    // Fetch category data when the component mounts
    fetchCategoryData();
    fetchPaymentMethodData();
  }, [fetchCategoryData, fetchPaymentMethodData]);

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
    if (
      !formData.blockName ||
      !formData.plotNo ||
      !formData.purchaserName ||
      !formData.guardianName ||
      !formData.cnic ||
      !formData.address ||
      !formData.mobileNo ||
      !formData.category ||
      !formData.extraFactorPaymenyt ||
      !formData.totalPlotPayment ||
      !formData.paymentMode ||
      !formData.paymentDate ||
      !formData.plotSize ||
      !formData.ratePerMarla ||
      !formData.extraPaymentFactor ||
      !formData.amountRecieved ||
      !formData.balanceAmount ||
      !formData.balanceAmountDueDate
    ) {
      console.log("Please enter the all fields for reservation");
      alert("please enter the all fields for reservation");
      return;
    }

    // Pass an object with properties name, description, img, and price to addProduct
    const bookingData = {
      blockName: formData.blockName,
      plotNo: formData.plotNo,
      purchaserName: formData.purchaserName,
      guardianName: formData.guardianName,
      cnic: formData.cnic,
      streetNo: formData.streetNo,
      address: formData.address,
      mobileNo: formData.mobileNo,
      category: formData.category,
      plotSize: formData.plotSize,
      ratePerMarla: formData.ratePerMarla,
      extraPaymentFactor: formData.extraPaymentFactor,
      extraFactorPaymenyt: formData.extraFactorPaymenyt,
      totalPlotPayment: formData.totalPlotPayment,
      paymentMode: formData.paymentMode,
      bankName: formData.bankName,
      branchName: formData.branchName,
      paymentDate: formData.paymentDate,
      amountRecieved: formData.amountRecieved,
      balanceAmount: formData.balanceAmount,
      balanceAmountDueDate: formData.balanceAmountDueDate,
    };

    // Dispatch the addProduct action
    addBooking(bookingData);

    // Optionally, you can reset the form after submission
    setFormData({
      blockName: "",
      plotNo: "",
      purchaserName: "",
      guardianName: "",
      cnic: "",
      streetNo: "",
      address: "",
      mobileNo: "",
      category: "",
      plotSize: "",
      ratePerMarla: "",
      extraPaymentFactor: "",
      extraFactorPaymenyt: "",
      totalPlotPayment: "",
      paymentMode: "",
      bankName: "",
      branchName: "",
      paymentDate: "",
      amountRecieved: "",
      balanceAmount: "",
      balanceAmountDueDate: "",
    });
  };
  // clearing the form
  const clearForm = () => {
    setFormData({
      blockName: "",
      plotNo: "",
      purchaserName: "",
      guardianName: "",
      cnic: "",
      streetNo: "",
      address: "",
      mobileNo: "",
      category: "",
      plotSize: "",
      ratePerMarla: "",
      extraPaymentFactor: "",
      extraFactorPaymenyt: "",
      totalPlotPayment: "",
      paymentMode: "",
      bankName: "",
      branchName: "",
      paymentDate: "",
      amountRecieved: "",
      balanceAmount: "",
      balanceAmountDueDate: "",
    });
  };
  // Component
  return (
    <View style={formStyles.model}>
      <TouchableOpacity
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={formStyles.closeButton}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text style={formStyles.closeButton}>X</Text>
      </TouchableOpacity>
      <Text style={formStyles.title}>Add Reservation </Text>
      <ScrollView
      // showsHorizontalScrollIndicator={false}
      // showsVerticalScrollIndicator={false}
      >
        <View style={formStyles.padder}>
          <View style={formStyles.allInputs}>
            <InputField
              value={formData.blockName}
              title="Block Name" // Don't forget to pass the handleChange function
              onChangeText={(text) => handleChange("blockName", text)}
            />
            <InputField
              value={formData.plotNo}
              title="Plot No" // Don't forget to pass the handleChange function
              onChangeText={(text) => handleChange("plotNo", text)}
            />
            <InputField
              value={formData.purchaserName}
              title="Purchaser Name" // Don't forget to pass the handleChange function
              onChangeText={(text) => handleChange("purchaserName", text)}
            />
            <InputField
              value={formData.guardianName}
              title="Guardian Name" // Don't forget to pass the handleChange function
              onChangeText={(text) => handleChange("guardianName", text)}
            />
            <InputField
              value={formData.cnic}
              title="CNIC" // Don't forget to pass the handleChange function
              onChangeText={(text) => handleChange("cnic", text)}
            />
            <InputField
              value={formData.streetNo}
              title="Street No" // Don't forget to pass the handleChange function
              onChangeText={(text) => handleChange("streetNo", text)}
            />
            <InputField
              value={formData.address}
              title="Address" // Don't forget to pass the handleChange function
              onChangeText={(text) => handleChange("address", text)}
            />
            <InputField
              value={formData.mobileNo}
              title="Mobile No" // Don't forget to pass the handleChange function
              onChangeText={(text) => handleChange("mobileNo", text)}
            />

            <View style={formStyles.inputWrapper}>
              <Text>
                Category Name
                <Text style={formStyles.requiredStar}>*</Text>
              </Text>
              <Picker
                style={formStyles.inputField}
                selectedValue={formData.category}
                onValueChange={(itemValue) =>
                  handleChange("category", itemValue)
                }
              >
                <Picker.Item label="Select a Category" value="" />
                {categoryData.map((category) => (
                  <Picker.Item
                    key={category._id}
                    label={category.name}
                    value={category._id}
                  />
                ))}
              </Picker>
            </View>

            <InputField
              value={formData.plotSize}
              title="plotSize" // Don't forget to pass the handleChange function
              onChangeText={(text) => handleChange("plotSize", text)}
            />
            <InputField
              value={formData.ratePerMarla}
              title="Rate per Marla" // Don't forget to pass the handleChange function
              onChangeText={(text) => handleChange("ratePerMarla", text)}
            />

            <InputField
              value={formData.extraPaymentFactor}
              title="Extra Payment Factor" // Don't forget to pass the handleChange function
              onChangeText={(text) => handleChange("extraPaymentFactor", text)}
            />
            <InputField
              value={formData.extraFactorPaymenyt}
              title="Extra Factor Paymenyt" // Don't forget to pass the handleChange function
              onChangeText={(text) => handleChange("extraFactorPaymenyt", text)}
            />
            <InputField
              value={formData.totalPlotPayment}
              title="Total Plot Payment" // Don't forget to pass the handleChange function
              onChangeText={(text) => handleChange("totalPlotPayment", text)}
            />

            <View style={formStyles.inputWrapper}>
              <Text>
                PAyment Mode
                <Text style={formStyles.requiredStar}>*</Text>
              </Text>
              <Picker
                style={formStyles.inputField}
                selectedValue={formData.paymentMode}
                onValueChange={(itemValue) =>
                  handleChange("paymentMode", itemValue)
                }
              >
                <Picker.Item label="Select a Payment Mode" value="" />
                {paymentMethodData.map((paymentMode) => (
                  <Picker.Item
                    key={paymentMode._id}
                    label={paymentMode.name}
                    value={paymentMode._id}
                  />
                ))}
              </Picker>
            </View>

            <InputField
              value={formData.bankName}
              title="Bank Name" // Don't forget to pass the handleChange function
              onChangeText={(text) => handleChange("bankName", text)}
            />
            <InputField
              value={formData.branchName}
              title="Branch Name" // Don't forget to pass the handleChange function
              onChangeText={(text) => handleChange("branchName", text)}
            />
            <InputField
              value={formData.paymentDate}
              title="Payment Date" // Don't forget to pass the handleChange function
              onChangeText={(text) => handleChange("paymentDate", text)}
            />
            <InputField
              value={formData.amountRecieved}
              title="Amount Recieved" // Don't forget to pass the handleChange function
              onChangeText={(text) => handleChange("amountRecieved", text)}
            />
            <InputField
              value={formData.balanceAmount}
              title="Balance Amount" // Don't forget to pass the handleChange function
              onChangeText={(text) => handleChange("balanceAmount", text)}
            />
            <InputField
              value={formData.balanceAmountDueDate}
              title="Balance Amount Due Date" // Don't forget to pass the handleChange function
              onChangeText={(text) =>
                handleChange("balanceAmountDueDate", text)
              }
            />
          </View>
          <View style={formStyles.buttonPosition}>
            <TouchableOpacity
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              onPress={clearForm}
              style={[formStyles.button, isHovered && formStyles.buttonHovered]}
            >
              <Text style={formStyles.buttonText}>Clear</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              onPress={submitForm}
              style={[formStyles.button, isHovered && formStyles.buttonHovered]}
            >
              <Text style={formStyles.buttonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              onPress={() => navigation.navigate("Dashboard")}
              style={[formStyles.button, isHovered && formStyles.buttonHovered]}
            >
              <Text style={formStyles.buttonText}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    categoryData: state.categories.categoryData,
    paymentMethodData: state.paymentMethods.paymentMethodData,
  };
};

const mapDispatchToProps = {
  addBooking,
  fetchCategoryData,
  fetchPaymentMethodData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationForm);
