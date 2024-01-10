import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import formStyles from "../../styles/formStyles";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { fetchCategoryData } from "../../redux/actions/categoryActions";
import { fetchPaymentMethodData } from "../../redux/actions/paymentMethodActions";
import { addBooking } from "../../redux/actions/bookingActions";
import InputField from "./components/InputField";

let systemDigits = generateRandom4DigitCode();

const ReservationForm = ({
  addBooking,
  fetchCategoryData,
  fetchPaymentMethodData,
  categoryData,
  paymentMethodData,
}) => {
  const navigation = useNavigation();

  //user Digits Define
  const [userDigits, setUserDigits] = useState("");
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
    mobileNo: "",
    address: "",
    streetNo: "",
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
    alreadyAmountRecieved: 0,
    amountRecieved: "",
    balanceAmount: "",
    balanceAmountDueDate: "",
    barcodeDigits: "",
  });

  // fetching the category and payemt method Data
  useEffect(() => {
    // Fetch category data when the component mounts
    fetchCategoryData();
    fetchPaymentMethodData();
  }, [fetchCategoryData, fetchPaymentMethodData]);

  //handling the form data
  const handleChange = (fieldName, value, isNumeric) => {
    // If isNumeric is true, remove non-numeric characters
    const cleanedValue = isNumeric ? value.replace(/[^0-9]/g, "") : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: cleanedValue,
    }));
  };

  // Ensure only digits are entered and limit to exactly four digits
  const handleUserDigits = (e) => {
    const value = e.target.value;

    // Ensure only digits are entered and limit to exactly four digits
    if (/^\d{0,4}$/.test(value)) {
      setUserDigits(value);
    }
  };

  const handleBarcodeDigits = (e) => {
    handleUserDigits(e);
    if (!userDigits && userDigits.length === 0) {
      return;
    } else if (userDigits.length === 4) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        barcodeDigits: systemDigits + userDigits,
      }));
      console.log(formData.barcodeDigits);
    }
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
      !formData.balanceAmountDueDate ||
      !formData.barcodeDigits
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
      mobileNo: formData.mobileNo,
      address: formData.address,
      streetNo: formData.streetNo,
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
      alreadyAmountRecieved: formData.alreadyAmountRecieved,
      amountRecieved: formData.amountRecieved,
      balanceAmount: formData.balanceAmount,
      balanceAmountDueDate: formData.balanceAmountDueDate,
      barcodeDigits: formData.barcodeDigits,
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
      mobileNo: "",
      address: "",
      streetNo: "",
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
      alreadyAmountRecieved: 0,
      amountRecieved: "",
      balanceAmount: "",
      balanceAmountDueDate: "",
    });
    setUserDigits("");
  };
  // clearing the form
  const clearForm = () => {
    setFormData({
      blockName: "",
      plotNo: "",
      purchaserName: "",
      guardianName: "",
      cnic: "",
      mobileNo: "",
      address: "",
      streetNo: "",
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
      alreadyAmountRecieved: 0,
      amountRecieved: "",
      balanceAmount: "",
      balanceAmountDueDate: "",
    });
    setUserDigits("");
  };
  // Component
  return (
    <View style={formStyles.model}>
      <TouchableOpacity
        onPressIn={handlePressIn}
        n
        onPressOut={handlePressOut}
        style={formStyles.closeButton}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text style={formStyles.closeButton}>X</Text>
      </TouchableOpacity>
      <Text style={formStyles.title}>Add Plot Booking </Text>
      <ScrollView
      // showsHorizontalScrollIndicator={false}
      // showsVerticalScrollIndicator={false}
      >
        <View style={formStyles.padder}>
          <View style={formStyles.allInputs}>
            <InputField
              value={formData.blockName}
              title="Block Name"
              onChangeText={(text) => handleChange("blockName", text)}
            />
            <InputField
              value={formData.plotNo}
              title="Plot No"
              onChangeText={(text) => handleChange("plotNo", text)}
            />
            <InputField
              value={formData.purchaserName}
              title="Purchaser Name"
              onChangeText={(text) => handleChange("purchaserName", text)}
            />
            <InputField
              value={formData.guardianName}
              title="Guardian Name"
              onChangeText={(text) => handleChange("guardianName", text)}
            />
            <InputField
              value={formData.cnic}
              title="CNIC"
              onChangeText={(text) => handleChange("cnic", text, true)}
            />
            <InputField
              value={formData.mobileNo}
              title="Mobile No"
              onChangeText={(text) => handleChange("mobileNo", text, true)}
            />
            <InputField
              value={formData.address}
              title="Address"
              onChangeText={(text) => handleChange("address", text)}
            />
            <InputField
              value={formData.streetNo}
              title="Street No"
              onChangeText={(text) => handleChange("streetNo", text)}
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
              title="plotSize"
              onChangeText={(text) => handleChange("plotSize", text, true)}
            />
            <InputField
              value={formData.ratePerMarla}
              title="Rate per Marla"
              onChangeText={(text) => handleChange("ratePerMarla", text, true)}
            />

            <InputField
              value={formData.extraPaymentFactor}
              title="Extra Payment Factor" // Don't forget to pass the handleChange function
              onChangeText={(text) => handleChange("extraPaymentFactor", text)}
            />
            <InputField
              value={formData.extraFactorPaymenyt}
              title="Extra Factor Paymenyt" // Don't forget to pass the handleChange function
              onChangeText={(text) =>
                handleChange("extraFactorPaymenyt", text, true)
              }
            />
            <InputField
              value={formData.totalPlotPayment}
              title="Total Plot Payment" // Don't forget to pass the handleChange function
              onChangeText={(text) =>
                handleChange("totalPlotPayment", text, true)
              }
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
              title="Bank Name"
              onChangeText={(text) => handleChange("bankName", text)}
            />
            <InputField
              value={formData.branchName}
              title="Branch Name"
              onChangeText={(text) => handleChange("branchName", text)}
            />
            <InputField
              value={formData.paymentDate}
              title="Payment Date"
              onChangeText={(text) => handleChange("paymentDate", text)}
            />
            <View style={formStyles.inputWrapper}>
              <Text>Already Amount Recieved</Text>
              <TextInput
                style={[
                  formStyles.inputField,
                  {
                    backgroundColor: `#ddd`,
                    cursor: "not-allowed",
                    outline: "none",
                  },
                ]}
                value={formData.alreadyAmountRecieved}
              />
            </View>
            <InputField
              value={formData.amountRecieved}
              title="Amount Recieved"
              onChangeText={(text) =>
                handleChange("amountRecieved", text, true)
              }
            />
            <InputField
              value={formData.balanceAmount}
              title="Balance Amount"
              onChangeText={(text) => handleChange("balanceAmount", text, true)}
            />
            <InputField
              value={formData.balanceAmountDueDate}
              title="Balance Amount Due Date"
              onChangeText={(text) =>
                handleChange("balanceAmountDueDate", text)
              }
            />
            <View style={formStyles.inputWrapper}>
              <Text>
                System generated Digits
                <Text style={formStyles.requiredStar}>*</Text>
              </Text>
              <TextInput
                style={[
                  formStyles.inputField,
                  {
                    backgroundColor: `#ddd`,
                    cursor: "not-allowed",
                    outline: "none",
                  },
                ]}
                value={systemDigits}
              />
            </View>

            <View style={formStyles.inputWrapper}>
              <Text>
                Enter exactly four digits
                <Text style={formStyles.requiredStar}>*</Text>
              </Text>
              <TextInput
                style={formStyles.inputField}
                value={userDigits}
                placeholder={`Enter exactly four digits...`}
                onChange={handleBarcodeDigits}
              />
            </View>
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

function generateRandom4DigitCode() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}
