import { View, ScrollView, Platform, Text } from "react-native";
import React, { useEffect } from "react";
import Barcode from "react-barcode";
import dataStyles from "../styles/dataStyles";
import { connect } from "react-redux";
import { fetchTownPlanningData } from "../redux/actions/townPlanningActions";
import { fetchCategoryData } from "../redux/actions/categoryActions";
import DataHeader from "./components/DataHeader";
import SingleData from "./components/SingleData";
import QRCode from "react-native-qrcode-svg";

let isWeb = Platform.OS === "web";

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
    <View style={{ flex: 1 }}>
      <DataHeader headerTitle={`Town Plannings (Resedential)`} />
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
                <SingleData title={`Marla Size(Sft) :`} data={data.marlaSize} />
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

                <View style={dataStyles.barcodePosition}>
                  {isWeb ? (
                    <Barcode
                      value={data.barcodeDigits}
                      displayValue={false}
                      height={60}
                    />
                  ) : (
                    <QRCode value={data.barcodeDigits} size={100} />
                  )}
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
    townPlanningData: state.townPlannings.townPlanningData,
  };
};

const mapDispatchToProps = {
  fetchTownPlanningData,
  fetchCategoryData,
};
export default connect(mapStateToProps, mapDispatchToProps)(TownPlanning);
