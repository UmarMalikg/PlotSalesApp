import {
  View,
  Platform,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import formStyles from "../../styles/formStyles";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { fetchCategoryData } from "../../redux/actions/categoryActions";
import { fetchPaymentMethodData } from "../../redux/actions/paymentMethodActions";
import { addReservation } from "../../redux/actions/reservationActions";
import InputField from "../components/InputField";
import DateTimePickerModal from "react-native-modal-datetime-picker";

let isWeb = Platform.OS === "web";

let systemDigits = generateRandom4DigitCode();

const ReservationForm = ({
  addReservation,
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

  // Date Picker Configurations
  // Usestates for both balanceAmountDueDate and PaymentDate
  const [isPaymentDatePickerVisible, setPaymentDatePickerVisibility] =
    useState(false);
  const [
    isBalanceAmountDatePickerVisible,
    setBalanceAmountDatePickerVisibility,
  ] = useState(false);

  // function to handle change in balance Amount Due Date
  const handleBalanceAmountDateChange = (date) => {
    setBalanceAmountDatePickerVisibility(false);
    if (date) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        balanceAmountDueDate: date,
      }));
    }
  };

  // function to handle change in Payment Date
  const handlePaymentDateChange = (date) => {
    setPaymentDatePickerVisibility(false);
    if (date) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        paymentDate: date,
      }));
    }
  };

  // functions to show the date pickers for both paymentDate and balanceAmountDueData
  const showPaymentDatePicker = () => {
    setPaymentDatePickerVisibility(true);
  };
  const showBalanceAmountDatePicker = () => {
    setBalanceAmountDatePickerVisibility(true);
  };

  // hiding the date picker
  const hideDatePicker = () => {
    setPaymentDatePickerVisibility(false);
    setBalanceAmountDatePickerVisibility(false);
  };

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

  const handleUserDigits = (text) => {
    // Ensure only digits are entered and limit to exactly four digits
    if (/^\d{0,4}$/.test(text)) {
      setUserDigits(text);
    }
  };

  const handleBarcodeDigits = (text) => {
    handleUserDigits(text);
    if (text.length === 4) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        barcodeDigits: systemDigits + text,
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
      !formData.address ||
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
    const reservationData = {
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
      amountRecieved: formData.amountRecieved,
      balanceAmount: formData.balanceAmount,
      balanceAmountDueDate: formData.balanceAmountDueDate,
      barcodeDigits: formData.barcodeDigits,
    };

    // Dispatch the addProduct action
    addReservation(reservationData);

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
      amountRecieved: "",
      balanceAmount: "",
      balanceAmountDueDate: "",
      barcodeDigits: "",
    });
    setUserDigits("");
    generateRandom4DigitCode();
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
      amountRecieved: "",
      balanceAmount: "",
      balanceAmountDueDate: "",
      barcodeDigits: "",
    });
    setUserDigits("");
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
              onChangeText={(text) => handleChange("cnic", text, true)}
            />
            <InputField
              value={formData.mobileNo}
              title="Mobile No" // Don't forget to pass the handleChange function
              onChangeText={(text) => handleChange("mobileNo", text, true)}
            />
            <InputField
              value={formData.address}
              title="Address" // Don't forget to pass the handleChange function
              onChangeText={(text) => handleChange("address", text)}
            />
            <InputField
              value={formData.streetNo}
              title="Street No" // Don't forget to pass the handleChange function
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
              title="plotSize" // Don't forget to pass the handleChange function
              onChangeText={(text) => handleChange("plotSize", text, true)} //
            />
            <InputField
              value={formData.ratePerMarla}
              title="Rate per Marla" // Don't forget to pass the handleChange function
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
                Payment Mode
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
            {isWeb ? (
              <View style={formStyles.inputWrapper}>
                <Text>
                  Payment Date
                  <Text style={formStyles.requiredStar}>*</Text>
                </Text>
                <input
                  type="date"
                  style={formStyles.inputField}
                  value={formData.paymentDate}
                  onChange={(e) => {
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      paymentDate: e.target.value,
                    }));
                  }}
                />
              </View>
            ) : (
              <View style={formStyles.inputWrapper}>
                <Text>Payment Date</Text>
                <View
                  style={[
                    formStyles.inputField,
                    {
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    },
                  ]}
                >
                  <Text>
                    {formData.paymentDate
                      ? formData.paymentDate.toDateString()
                      : `Payment Date...`}
                  </Text>

                  <TouchableOpacity onPress={showPaymentDatePicker}>
                    <Image
                      style={{ width: 30, height: 30 }}
                      source={require("../../../assets/images/datePicker.png")}
                    />
                  </TouchableOpacity>
                </View>

                <DateTimePickerModal
                  isVisible={isPaymentDatePickerVisible}
                  mode="date"
                  onConfirm={handlePaymentDateChange}
                  onCancel={hideDatePicker}
                />
              </View>
            )}
            <InputField
              value={formData.amountRecieved}
              title="Amount Recieved" // Don't forget to pass the handleChange function
              onChangeText={(text) =>
                handleChange("amountRecieved", text, true)
              }
            />
            <InputField
              value={formData.balanceAmount}
              title="Balance Amount" // Don't forget to pass the handleChange function
              onChangeText={(text) => handleChange("balanceAmount", text, true)}
            />
            {isWeb ? (
              <View style={formStyles.inputWrapper}>
                <Text>
                  Balance Amount Due Date
                  <Text style={formStyles.requiredStar}>*</Text>
                </Text>
                <input
                  type="date"
                  style={formStyles.inputField}
                  value={formData.balanceAmountDueDate}
                  onChange={(e) => {
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      balanceAmountDueDate: e.target.value,
                    }));
                  }}
                />
              </View>
            ) : (
              <View style={formStyles.inputWrapper}>
                <Text>Balance Amount Due Date</Text>
                <View
                  style={[
                    formStyles.inputField,
                    {
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    },
                  ]}
                >
                  <Text>
                    {formData.balanceAmountDueDate
                      ? formData.balanceAmountDueDate.toDateString()
                      : `Balance Amount Due Date...`}
                  </Text>

                  <TouchableOpacity onPress={showBalanceAmountDatePicker}>
                    <Image
                      style={{ width: 30, height: 30 }}
                      source={require("../../../assets/images/datePicker.png")}
                    />
                  </TouchableOpacity>
                </View>

                <DateTimePickerModal
                  isVisible={isBalanceAmountDatePickerVisible}
                  mode="date"
                  onConfirm={handleBalanceAmountDateChange}
                  onCancel={hideDatePicker}
                />
              </View>
            )}

            <View style={formStyles.inputWrapper}>
              <Text>System generated Digits</Text>
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
                onChangeText={handleBarcodeDigits}
              />
            </View>
          </View>
          <View style={formStyles.buttonPosition}>
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
              onPress={clearForm}
              style={[formStyles.button, isHovered && formStyles.buttonHovered]}
            >
              <Text style={formStyles.buttonText}>Clear</Text>
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
  addReservation,
  fetchCategoryData,
  fetchPaymentMethodData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationForm);

function generateRandom4DigitCode() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}
