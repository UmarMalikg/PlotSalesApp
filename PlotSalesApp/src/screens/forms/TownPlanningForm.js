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
import { addTownPlanning } from "../../redux/actions/townPlanningActions";
import InputField from "../components/InputField";

let systemDigits = generateRandom4DigitCode();

const TownPlanningForm = ({
  addTownPlanning,
  fetchCategoryData,
  categoryData,
}) => {
  const navigation = useNavigation();

  //user Digits Define
  const [userDigits, setUserDigits] = useState("");
  const [dimensionsHeight, setDimensionsHeight] = useState("");
  const [dimensionsWidth, setDimensionsWidth] = useState("");

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
    lotNo: "",
    blockName: "",
    plotNo: "",
    category: "",
    dimension: "",
    plotSize: "",
    ratePerMarla: "",
    marlaSize: "",
    extraPaymentFactor: "",
    extraPaymentAmount: "",
    streetNo: "",
    salePrice: "",
    installmentSalePrice: "",
    barcodeDigits: "",
  });

  // fetching the category and payemt method Data
  useEffect(() => {
    // Fetch category data when the component mounts
    fetchCategoryData();
  }, [fetchCategoryData]);

  //handling the form data
  const handleChange = (fieldName, value, isNumeric) => {
    // If isNumeric is true, remove non-numeric characters
    const cleanedValue = isNumeric ? value.replace(/[^0-9]/g, "") : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: cleanedValue,
    }));
  };

  const handleUserDigits = (e) => {
    const value = e.target.value;

    // Ensure only digits are entered and limit to exactly four digits
    if (/^\d{0,4}$/.test(value)) {
      setUserDigits(value);
    }
  };

  //handle dimension's Height
  const handleDimensionsHeight = (e) => {
    const value = e.target.value;

    // Ensure only digits are entered
    if (/^\d*$/.test(value)) {
      setDimensionsHeight(value);
    }
    handleDimension();
  };

  //handle dimension's Width
  const handleDimensionsWidth = (e) => {
    const value = e.target.value;
    // Ensure only digits are entered
    if (/^\d*$/.test(value)) {
      setDimensionsWidth(value);
    }
    handleDimension();
  };

  // handling the dimension
  const handleDimension = () => {
    if (
      (!dimensionsHeight && dimensionsWidth === 0) ||
      (!dimensionsWidth && dimensionsWidth.length === 0)
    ) {
      return;
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      dimension: `${dimensionsHeight}X${dimensionsWidth}`,
    }));
    console.log(formData.dimension);
  };

  // handling the barcode digits
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
      !formData.lotNo ||
      !formData.blockName ||
      !formData.plotNo ||
      !formData.category ||
      !formData.dimension ||
      !formData.plotSize ||
      !formData.ratePerMarla ||
      !formData.marlaSize ||
      !formData.extraPaymentFactor ||
      !formData.extraPaymentAmount ||
      !formData.streetNo ||
      !formData.salePrice ||
      !formData.installmentSalePrice ||
      !formData.barcodeDigits
    ) {
      console.log("Please enter the all fields for town planning");
      alert("please enter the all fields for town plannings");
      return;
    }

    // Pass an object with properties name, description, img, and price to addProduct
    const townPlanningData = {
      lotNo: formData.lotNo,
      blockName: formData.blockName,
      plotNo: formData.plotNo,
      category: formData.category,
      dimension: formData.dimension,
      plotSize: formData.plotSize,
      ratePerMarla: formData.ratePerMarla,
      marlaSize: formData.marlaSize,
      extraPaymentFactor: formData.extraPaymentFactor,
      extraPaymentAmount: formData.extraPaymentAmount,
      streetNo: formData.streetNo,
      salePrice: formData.salePrice,
      installmentSalePrice: formData.installmentSalePrice,
      barcodeDigits: formData.barcodeDigits,
    };

    // Dispatch the addProduct action
    addTownPlanning(townPlanningData);

    // Optionally, you can reset the form after submission
    setFormData({
      lotNo: "",
      blockName: "",
      plotNo: "",
      category: "",
      dimension: "",
      plotSize: "",
      ratePerMarla: "",
      marlaSize: "",
      extraPaymentFactor: "",
      extraPaymentAmount: "",
      streetNo: "",
      salePrice: "",
      installmentSalePrice: "",
      barcodeDigits: "",
    });
    setUserDigits("");
    generateRandom4DigitCode();
  };
  // clearing the form
  const clearForm = () => {
    setFormData({
      lotNo: "",
      blockName: "",
      plotNo: "",
      category: "",
      dimension: "",
      plotSize: "",
      ratePerMarla: "",
      marlaSize: "",
      extraPaymentFactor: "",
      extraPaymentAmount: "",
      streetNo: "",
      salePrice: "",
      installmentSalePrice: "",
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
      <Text style={formStyles.title}>Add Town Planning </Text>
      <ScrollView
      // showsHorizontalScrollIndicator={false}
      // showsVerticalScrollIndicator={false}
      >
        <View style={formStyles.padder}>
          <View style={formStyles.allInputs}>
            <InputField
              value={formData.lotNo}
              title="Lot No" // Don't forget to pass the handleChange function
              onChangeText={(text) => handleChange("lotNo", text)}
            />
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
            <View
              style={[
                formStyles.inputWrapper,
                { display: "grid", gridTemplateColumns: "1fr 1fr" },
              ]}
            >
              <View>
                <Text>
                  Height
                  <Text style={formStyles.requiredStar}>*</Text>
                </Text>
                <TextInput
                  style={formStyles.inputField}
                  value={dimensionsHeight}
                  placeholder={`H`}
                  onChange={handleDimensionsHeight}
                  placeholderTextColor={`#999`}
                />
              </View>
              <View>
                <Text>
                  Width
                  <Text style={formStyles.requiredStar}>*</Text>
                </Text>
                <TextInput
                  style={formStyles.inputField}
                  value={dimensionsWidth}
                  placeholder={`W`}
                  onChange={handleDimensionsWidth}
                  placeholderTextColor={`#999`}
                />
              </View>
            </View>
            <InputField
              value={formData.plotSize}
              title="plotSize" // Don't forget to pass the handleChange function
              onChangeText={(text) => handleChange("plotSize", text, true)}
            />
            <InputField
              value={formData.ratePerMarla}
              title="Rate per Marla" // Don't forget to pass the handleChange function
              onChangeText={(text) => handleChange("ratePerMarla", text, true)}
            />
            <InputField
              value={formData.marlaSize}
              title="Marla Size(Sft)" // Don't forget to pass the handleChange function
              onChangeText={(text) => handleChange("marlaSize", text, true)}
            />

            <InputField
              value={formData.extraPaymentFactor}
              title="Extra Payment Factor" // Don't forget to pass the handleChange function
              onChangeText={(text) => handleChange("extraPaymentFactor", text)}
            />

            <InputField
              value={formData.extraPaymentAmount}
              title="Extra Factor Paymenyt" // Don't forget to pass the handleChange function
              onChangeText={(text) =>
                handleChange("extraPaymentAmount", text, true)
              }
            />
            <InputField
              value={formData.streetNo}
              title="Street No" // Don't forget to pass the handleChange function
              onChangeText={(text) => handleChange("streetNo", text)}
            />
            <InputField
              value={formData.salePrice}
              title="Sale Price" // Don't forget to pass the handleChange function
              onChangeText={(text) => handleChange("salePrice", text, true)}
            />
            <InputField
              value={formData.installmentSalePrice}
              title="Installment Sale Price" // Don't forget to pass the handleChange function
              onChangeText={(text) =>
                handleChange("installmentSalePrice", text, true)
              }
            />
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
  };
};

const mapDispatchToProps = {
  addTownPlanning,
  fetchCategoryData,
};

export default connect(mapStateToProps, mapDispatchToProps)(TownPlanningForm);

function generateRandom4DigitCode() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}
