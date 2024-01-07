const mongoose = require("mongoose");

const plotBookingSchema = mongoose.Schema({
  blockname: { type: String, required: true },
  plotNo: { type: String, required: true },
  purchaserName: { type: String, required: true },
  guardianName: { type: String, required: true },
  cnic: { type: String, required: true },
  streetNo: { type: String },
  address: { type: String },
  mobileNo: { type: Number, required: true },
  //   category: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "categories",
  //   },
  address: { type: String, required: true },

  plotSize: { type: String, required: true },
  ratePerMarla: { type: Number, required: true },
  extraPaymentFactor: { type: String, required: true },
  //   dimension: { type: String, required: true },
  extraFactorPaymenyt: { type: String, required: true },
  //   extraPaymentAmount: { type: String, required: true },
  totalPlotPayment: { type: String, required: true },
  paymentMode: { type: mongoose.Schema.Types.ObjectId, ref: "paymentModes" },
  bankName: { type: String, required: true },
  branchName: { type: String, required: true },
  paymentDate: { type: Date, required: true },
  amountRecieved: { type: String, required: true },
  balanceAmount: { type: String, required: true },
  balanceAmountDueDate: { type: Date, required: true },
});

const PlotBooking = mongoose.model("reservation", plotBookingSchema);
module.exports = PlotBooking;
