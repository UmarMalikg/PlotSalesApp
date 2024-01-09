import { View, ScrollView, Text } from "react-native";
import React, { useEffect } from "react";
import dataStyles from "../styles/dataStyles";
import { connect } from "react-redux";
import { fetchCategoryData } from "../redux/actions/categoryActions";
import DataHeader from "./forms/components/DataHeader";

const Category = ({ fetchCategoryData, categoryData }) => {
  useEffect(() => {
    fetchCategoryData();
  }, [fetchCategoryData]);

  return (
    <View>
      <DataHeader headerTitle={`All Plot's Categories`} />
      <View style={dataStyles.dataPosition}>
        <ScrollView>
          <View style={dataStyles.catPaygrids}>
            {categoryData.map((data) => (
              <View style={dataStyles.catPayDataWrapper} key={data._id}>
                <View style={dataStyles.singleData}>
                  <Text style={dataStyles.catPayData}>{data.name}</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    categoryData: state.categories.categoryData,
  };
};

const mapDispatchToProps = {
  fetchCategoryData,
};
export default connect(mapStateToProps, mapDispatchToProps)(Category);
