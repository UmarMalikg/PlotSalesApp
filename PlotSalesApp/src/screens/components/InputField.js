import { View, Text, TextInput } from "react-native";
import formStyles from "../../styles/formStyles";
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
