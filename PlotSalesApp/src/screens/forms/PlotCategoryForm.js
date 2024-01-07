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
import { addCategory } from "../../redux/actions/categoryActions";

const PlotCategoryForm = ({ addCategory }) => {
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

  // Component
  return (
    <View>
      <Text>Add plot Category </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
        <Text>X</Text>
      </TouchableOpacity>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Text>
          Category Name<Text>*</Text>
        </Text>
        <TextInput
          value={formData.name}
          onChangeText={(text) => handleChange("name", text)}
          placeholder="Category Name..."
        />
        <TouchableOpacity onPress={submitForm}>
          <Text>Add Category</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const mapDispatchToProps = {
  addCategory,
};

export default connect(null, mapDispatchToProps)(PlotCategoryForm);
