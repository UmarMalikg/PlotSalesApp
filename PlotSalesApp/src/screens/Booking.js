import { View, ScrollView } from "react-native";
import React, { useEffect } from "react";
import dataStyles from "../styles/dataStyles";
import Barcode from "react-barcode";
import { connect } from "react-redux";
import { fetchCategoryData } from "../redux/actions/categoryActions";
import { fetchPaymentMethodData } from "../redux/actions/paymentMethodActions";
import { fetchBookingData } from "../redux/actions/bookingActions";
import DataHeader from "./components/DataHeader";
import SingleData from "./components/SingleData";

const Booking = ({
  fetchCategoryData,
  categoryData,
  fetchPaymentMethodData,
  paymentMethodData,
  fetchBookingData,
  bookingData,
}) => {
  useEffect(() => {
    fetchCategoryData();
    fetchPaymentMethodData();
    fetchBookingData();
  }, [fetchCategoryData, fetchPaymentMethodData, fetchBookingData]);

  return (
    <View>
      <DataHeader headerTitle={`Reservation`} />
      <View style={dataStyles.dataPosition}>
        <ScrollView>
          <View style={dataStyles.dataGrids}>
            {bookingData.map((data) => (
              <View style={dataStyles.dataWrapper} key={data._id}>
                <SingleData title={`Block Name :`} data={data.blockName} />
                <SingleData title={`Plot No :`} data={data.plotNo} />
                <SingleData
                  title={`Purchaser's Name :`}
                  data={data.purchaserName}
                />
                <SingleData title={`S/O D/O W/O :`} data={data.guardianName} />
                <SingleData title={`CNIC :`} data={data.cnic} />
                <SingleData title={`Mobile No :`} data={data.mobileNo} />
                <SingleData title={`Address :`} data={data.address} />
                <SingleData title={`Street No :`} data={data.streetNo} />
                <SingleData
                  title={`Category :`}
                  data={
                    categoryData.find(
                      (category) => category._id === data.category
                    )?.name || "N/A"
                  }
                />

                <SingleData title={`Plot Size :`} data={data.plotSize} />
                <SingleData
                  title={`Rate Per Marla :`}
                  data={data.ratePerMarla}
                />
                <SingleData
                  title={`Extra Payment Factors :`}
                  data={data.extraPaymentFactor}
                />
                <SingleData
                  title={`Extra Factor Payment :`}
                  data={data.extraFactorPaymenyt}
                />
                <SingleData
                  title={`Total Payment :`}
                  data={data.totalPlotPayment}
                />

                <SingleData
                  title={`Payment Mode :`}
                  data={
                    paymentMethodData.find(
                      (paymentMode) => paymentMode._id === data.paymentMode
                    )?.name || "N/A"
                  }
                />

                <SingleData title={`Bank Name :`} data={data.bankName} />
                <SingleData title={`Branch Name :`} data={data.branchName} />
                <SingleData title={`Payment Date :`} data={data.paymentDate} />
                <SingleData
                  title={`Already Amount Recieved :`}
                  data={data.amountRecieved}
                />
                <SingleData
                  title={`Amount Recieved :`}
                  data={data.amountRecieved}
                />
                <SingleData
                  title={`Balance Amount :`}
                  data={data.balanceAmount}
                />
                <SingleData
                  title={`Balance Amount Due Date :`}
                  data={data.balanceAmountDueDate}
                />
                <View style={dataStyles.barcodePosition}>
                  <Barcode
                    value={data.barcodeDigits}
                    displayValue={false}
                    height={60}
                  />
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
    paymentMethodData: state.paymentMethods.paymentMethodData,
    bookingData: state.bookings.bookingData,
  };
};

const mapDispatchToProps = {
  fetchCategoryData,
  fetchPaymentMethodData,
  fetchBookingData,
};
export default connect(mapStateToProps, mapDispatchToProps)(Booking);
