import { View, ScrollView } from "react-native";
import React, { useEffect } from "react";
import dataStyles from "../styles/dataStyles";
import { connect } from "react-redux";
import { fetchReservationData } from "../redux/actions/reservationActions";
import { fetchCategoryData } from "../redux/actions/categoryActions";
import { fetchPaymentMethodData } from "../redux/actions/paymentMethodActions";
import DataHeader from "./forms/components/DataHeader";
import SingleData from "./forms/components/SingleData";

const Reservation = ({
  fetchCategoryData,
  categoryData,
  fetchPaymentMethodData,
  paymentMethodData,
  fetchReservationData,
  reservationData,
}) => {
  useEffect(() => {
    fetchCategoryData();
    fetchPaymentMethodData();
    fetchReservationData();
  }, [fetchCategoryData, fetchPaymentMethodData, fetchReservationData]);

  return (
    <View>
      <DataHeader headerTitle={`Reservation`} />
      <View style={dataStyles.dataPosition}>
        <ScrollView>
          <View style={dataStyles.dataGrids}>
            {reservationData.map((reservation) => (
              <View style={dataStyles.dataWrapper} key={reservation._id}>
                <SingleData
                  title={`Block Name :`}
                  data={reservation.blockName}
                />
                <SingleData title={`Plot No :`} data={reservation.plotNo} />
                <SingleData
                  title={`Purchaser's Name :`}
                  data={reservation.purchaserName}
                />
                <SingleData
                  title={`S/O D/O W/O :`}
                  data={reservation.guardianName}
                />
                <SingleData title={`CNIC :`} data={reservation.cnic} />
                <SingleData title={`Street No :`} data={reservation.streetNo} />
                <SingleData title={`Address :`} data={reservation.address} />
                <SingleData title={`Mobile No :`} data={reservation.mobileNo} />
                <SingleData
                  title={`Category :`}
                  data={
                    categoryData.find(
                      (category) => category._id === reservation.category
                    )?.name || "N/A"
                  }
                />

                <SingleData title={`Plot Size :`} data={reservation.plotSize} />
                <SingleData
                  title={`Rate Per Marla :`}
                  data={reservation.ratePerMarla}
                />
                <SingleData
                  title={`Extra Payment Factors :`}
                  data={reservation.extraPaymentFactor}
                />
                <SingleData
                  title={`Extra Factor Payment :`}
                  data={reservation.extraFactorPaymenyt}
                />
                <SingleData
                  title={`Total Payment :`}
                  data={reservation.totalPlotPayment}
                />

                <SingleData
                  title={`Payment Mode :`}
                  data={
                    paymentMethodData.find(
                      (paymentMode) =>
                        paymentMode._id === reservation.paymentMode
                    )?.name || "N/A"
                  }
                />

                <SingleData title={`Bank Name :`} data={reservation.bankName} />
                <SingleData
                  title={`Branch Name :`}
                  data={reservation.branchName}
                />
                <SingleData
                  title={`Payment Date :`}
                  data={reservation.paymentDate}
                />
                <SingleData
                  title={`Amount Recieved :`}
                  data={reservation.amountRecieved}
                />
                <SingleData
                  title={`Balance Amount :`}
                  data={reservation.balanceAmount}
                />
                <SingleData
                  title={`Balance Amount Due Date :`}
                  data={reservation.balanceAmountDueDate}
                />
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
    paymentMethodData: state.paymentMethods.paymentMethodData,
    reservationData: state.reservations.reservationData,
  };
};

const mapDispatchToProps = {
  fetchCategoryData,
  fetchPaymentMethodData,
  fetchReservationData,
};
export default connect(mapStateToProps, mapDispatchToProps)(Reservation);
