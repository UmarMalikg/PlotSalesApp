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
            {townPlanningData.map((townPlanning) => (
              <View style={dataStyles.dataWrapper} key={townPlanning._id}>
                <SingleData title={`Lot No :`} data={townPlanning.lotNo} />
                <SingleData
                  title={`Block Name :`}
                  data={townPlanning.blockName}
                />
                <SingleData title={`Plot No :`} data={townPlanning.plotNo} />
                <SingleData
                  title={`Category :`}
                  data={
                    categoryData.find(
                      (category) => category._id === townPlanning.category
                    )?.name || "N/A"
                  }
                />
                <SingleData
                  title={`Dimension :`}
                  data={townPlanning.dimension}
                />
                <SingleData
                  title={`Plot Size :`}
                  data={townPlanning.plotSize}
                />
                <SingleData
                  title={`Rate Per Marla :`}
                  data={townPlanning.ratePerMarla}
                />
                <SingleData
                  title={`Extra Payment Factor :`}
                  data={townPlanning.extraPaymentFactor}
                />
                <SingleData
                  title={`Extra Payment Amount :`}
                  data={townPlanning.extraPaymentAmount}
                />
                <SingleData
                  title={`Street No :`}
                  data={townPlanning.streetNo}
                />
                <SingleData
                  title={`Sale Price :`}
                  data={townPlanning.salePrice}
                />
                <SingleData
                  title={`Installment Sale Price :`}
                  data={townPlanning.installmentSalePrice}
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
