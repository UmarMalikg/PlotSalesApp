import { View, Text, TextInput } from "react-native";
import formStyles from "../../../styles/formStyles";
import React from "react";

const InputField = ({ title, value, onChangeText }) => {
  return (
    <View style={formStyles.inputWrapper}>
      <Text>
        {title}
        <Text style={formStyles.requiredStar}>*</Text>
      </Text>
      <TextInput
        style={formStyles.inputField}
        value={value}
        onChangeText={onChangeText}
        placeholder={`${title}...`}
      />
    </View>
  );
};

export default InputField;

{
  /*<View style={formStyles.inputWrapper}>
              <Text>
                Block Name<Text>*</Text>
              </Text>
              <TextInput
                style={formStyles.inputField}
                value={formData.blockName}
                onChangeText={(text) => handleChange("blockName", text)}
                placeholder="Block Name..."
              />
            </View> 
  <View style={formStyles.inputWrapper}>
              <Text>
                plotNo<Text>*</Text>
              </Text>
              <TextInput
                style={formStyles.inputField}
                value={formData.plotNo}
                onChangeText={(text) => handleChange("plotNo", text)}
                placeholder="plotNo..."
              />
            </View>
            <View style={formStyles.inputWrapper}>
              <Text>
                purchaserName<Text>*</Text>
              </Text>
              <TextInput
                style={formStyles.inputField}
                value={formData.purchaserName}
                onChangeText={(text) => handleChange("purchaserName", text)}
                placeholder="purchaserName..."
              />
            </View>
            <View style={formStyles.inputWrapper}>
              <Text>
                guardianName<Text>*</Text>
              </Text>
              <TextInput
                style={formStyles.inputField}
                value={formData.guardianName}
                onChangeText={(text) => handleChange("guardianName", text)}
                placeholder="guardianName..."
              />
            </View>
            <View style={formStyles.inputWrapper}>
              <Text>
                cnic<Text>*</Text>
              </Text>
              <TextInput
                style={formStyles.inputField}
                value={formData.cnic}
                onChangeText={(text) => handleChange("cnic", text)}
                placeholder="cnic..."
              />
            </View>
            <View style={formStyles.inputWrapper}>
              <Text>
                streetNo<Text>*</Text>
              </Text>
              <TextInput
                style={formStyles.inputField}
                value={formData.streetNo}
                onChangeText={(text) => handleChange("streetNo", text)}
                placeholder="streetNo..."
              />
            </View>
            <View style={formStyles.inputWrapper}>
              <Text>
                address<Text>*</Text>
              </Text>
              <TextInput
                style={formStyles.inputField}
                value={formData.address}
                onChangeText={(text) => handleChange("address", text)}
                placeholder="address..."
              />
            </View>
            <View style={formStyles.inputWrapper}>
              <Text>
                mobileNo<Text>*</Text>
              </Text>
              <TextInput
                style={formStyles.inputField}
                value={formData.mobileNo}
                onChangeText={(text) => handleChange("mobileNo", text)}
                placeholder="mobileNo..."
              />
            </View>
            <View style={formStyles.inputWrapper}>
              <Text>
                category<Text>*</Text>
              </Text>
              <TextInput
                style={formStyles.inputField}
                value={formData.category}
                onChangeText={(text) => handleChange("category", text)}
                placeholder="category..."
              />
            </View>
            <View style={formStyles.inputWrapper}>
              <Text>
                plotSize<Text>*</Text>
              </Text>
              <TextInput
                style={formStyles.inputField}
                value={formData.plotSize}
                onChangeText={(text) => handleChange("plotSize", text)}
                placeholder="plotSize..."
              />
            </View>
            <View style={formStyles.inputWrapper}>
              <Text>
                ratePerMarla<Text>*</Text>
              </Text>
              <TextInput
                style={formStyles.inputField}
                value={formData.ratePerMarla}
                onChangeText={(text) => handleChange("ratePerMarla", text)}
                placeholder="ratePerMarla..."
              />
            </View> */
}
