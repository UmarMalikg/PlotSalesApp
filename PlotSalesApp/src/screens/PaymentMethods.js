import { View, ScrollView, Text } from "react-native";
import React, { useEffect } from "react";
import dataStyles from "../styles/dataStyles";
import { connect } from "react-redux";
import { fetchPaymentMethodData } from "../redux/actions/paymentMethodActions";
import DataHeader from "./forms/components/DataHeader";

const PaaymentMethods = ({ fetchPaymentMethodData, paymentMethodData }) => {
  useEffect(() => {
    fetchPaymentMethodData();
  }, [fetchPaymentMethodData]);

  return (
    <View>
      <DataHeader headerTitle={`All Plot's Categories`} />
      <View style={dataStyles.dataPosition}>
        <ScrollView>
          <View style={dataStyles.catPaygrids}>
            {paymentMethodData.map((data) => (
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
    paymentMethodData: state.paymentMethods.paymentMethodData,
  };
};

const mapDispatchToProps = {
  fetchPaymentMethodData,
};
export default connect(mapStateToProps, mapDispatchToProps)(PaaymentMethods);
