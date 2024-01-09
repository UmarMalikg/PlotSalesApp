import { View, ScrollView } from "react-native";
import React, { useEffect } from "react";
import dataStyles from "../styles/dataStyles";
import { connect } from "react-redux";
import { fetchTownPlanningData } from "../redux/actions/townPlanningActions";
import { fetchCategoryData } from "../redux/actions/categoryActions";
import DataHeader from "./forms/components/DataHeader";
import SingleData from "./forms/components/SingleData";

const TownPlanning = ({
  fetchTownPlanningData,
  townPlanningData,
  fetchCategoryData,
  categoryData,
}) => {
  useEffect(() => {
    fetchCategoryData();
    fetchTownPlanningData();
  }, [fetchCategoryData, fetchTownPlanningData]);

  return (
    <View>
      <DataHeader headerTitle={`Town Planning (Resedential)`} />
      <View style={dataStyles.dataPosition}>
        <ScrollView>
          <View style={dataStyles.dataGrids}>
            {townPlanningData.map((data) => (
              <View style={dataStyles.dataWrapper} key={data._id}>
                <SingleData title={`Lot No :`} data={data.lotNo} />
                <SingleData title={`Block Name :`} data={data.blockName} />
                <SingleData title={`Plot No :`} data={data.plotNo} />
                <SingleData
                  title={`Category :`}
                  data={
                    categoryData.find(
                      (category) => category._id === data.category
                    )?.name || "N/A"
                  }
                />
                <SingleData title={`Dimension :`} data={data.dimension} />
                <SingleData title={`Plot Size :`} data={data.plotSize} />
                <SingleData
                  title={`Rate Per Marla :`}
                  data={data.ratePerMarla}
                />
                <SingleData
                  title={`Extra Payment Factor :`}
                  data={data.extraPaymentFactor}
                />
                <SingleData
                  title={`Extra Payment Amount :`}
                  data={data.extraPaymentAmount}
                />
                <SingleData title={`Street No :`} data={data.streetNo} />
                <SingleData title={`Sale Price :`} data={data.salePrice} />
                <SingleData
                  title={`Installment Sale Price :`}
                  data={data.installmentSalePrice}
                />
                {/* <View style={dataStyles.singleData}>
                <Text style={dataStyles.dataTitle}>Plot No:</Text>
                <Text style={dataStyles.data}>{townPlanning.plotNo}</Text>
              </View> */}
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
    townPlanningData: state.townPlannings.townPlanningData,
  };
};

const mapDispatchToProps = {
  fetchTownPlanningData,
  fetchCategoryData,
};
export default connect(mapStateToProps, mapDispatchToProps)(TownPlanning);
