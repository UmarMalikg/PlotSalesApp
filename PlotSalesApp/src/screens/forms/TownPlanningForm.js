import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import formStyles from "../../styles/formStyles";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { fetchCategoryData } from "../../redux/actions/categoryActions";
import { fetchPaymentMethodData } from "../../redux/actions/paymentMethodActions";
import { addTownPlanning } from "../../redux/actions/townPlanningActions";
import InputField from "./components/InputFieldWrapper";

const TownPlanningForm = ({
  addTownPlanning,
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
    lotNo: "",
    blockName: "",
    plotNo: "",
    // purchaserName: "",
    // guardianName: "",
    // cnic: "",
    // streetNo: "",
    // address: "",
    // mobileNo: "",
    category: "",
    dimension: "",
    plotSize: "",
    ratePerMarla: "",
    extraPaymentFactor: "",
    extraPaymentAmount: "",
    streetNo: "",
    // totalPlotPayment: "",
    // paymentMode: "",
    // bankName: "",
    // branchName: "",
    // paymentDate: "",
    // amountRecieved: "",
    // balanceAmount: "",
    salePrice: "",
    installmentSalePrice: "",
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
      !formData.lotNo ||
      !formData.blockName ||
      !formData.plotNo ||
      !formData.category ||
      !formData.dimension ||
      !formData.plotSize ||
      !formData.ratePerMarla ||
      !formData.extraPaymentFactor ||
      !formData.extraPaymentAmount ||
      !formData.streetNo ||
      !formData.salePrice ||
      !formData.installmentSalePrice
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
      extraPaymentFactor: formData.extraPaymentFactor,
      extraPaymentAmount: formData.extraPaymentAmount,
      streetNo: formData.streetNo,
      salePrice: formData.salePrice,
      installmentSalePrice: formData.installmentSalePrice,
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
      extraPaymentFactor: "",
      extraPaymentAmount: "",
      streetNo: "",
      salePrice: "",
      installmentSalePrice: "",
    });
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
      extraPaymentFactor: "",
      extraPaymentAmount: "",
      streetNo: "",
      salePrice: "",
      installmentSalePrice: "",
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

            <InputField
              value={formData.dimension}
              title="Dimension HXW" // Don't forget to pass the handleChange function
              onChangeText={(text) => handleChange("dimension", text)}
            />
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
              value={formData.extraPaymentAmount}
              title="Extra Factor Paymenyt" // Don't forget to pass the handleChange function
              onChangeText={(text) => handleChange("extraPaymentAmount", text)}
            />
            <InputField
              value={formData.streetNo}
              title="Street No" // Don't forget to pass the handleChange function
              onChangeText={(text) => handleChange("streetNo", text)}
            />
            <InputField
              value={formData.salePrice}
              title="Sale Price" // Don't forget to pass the handleChange function
              onChangeText={(text) => handleChange("salePrice", text)}
            />
            <InputField
              value={formData.installmentSalePrice}
              title="Installment Sale Price" // Don't forget to pass the handleChange function
              onChangeText={(text) =>
                handleChange("installmentSalePrice", text)
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
  addTownPlanning,
  fetchCategoryData,
  fetchPaymentMethodData,
};

export default connect(mapStateToProps, mapDispatchToProps)(TownPlanningForm);
