import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import formStyles from "../../styles/formStyles";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { addCategory } from "../../redux/actions/categoryActions";

const PlotCategoryForm = ({ addCategory }) => {
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
      console.log("Please enter the name of category");
      alert("please enter the name of category");
      return;
    }

    // Pass an object with properties name, description, img, and price to addProduct
    const categoryData = {
      name: formData.name,
    };

    // Dispatch the addProduct action
    addCategory(categoryData);

    // Optionally, you can reset the form after submission
    setFormData({
      name: "",
    });
  };
  // clearing the form
  const clearForm = () => {
    setFormData({
      name: "",
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
      <Text style={formStyles.title}>Add plot Category </Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={formStyles.padder}>
          <View style={formStyles.allInputs}>
            <View style={formStyles.inputWrapper}>
              <Text>
                Category Name<Text style={formStyles.requiredStar}>*</Text>
              </Text>
              <TextInput
                style={formStyles.inputField}
                value={formData.name}
                onChangeText={(text) => handleChange("name", text)}
                placeholder="Category Name..."
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

const mapDispatchToProps = {
  addCategory,
};

export default connect(null, mapDispatchToProps)(PlotCategoryForm);
