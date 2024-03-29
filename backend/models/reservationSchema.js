const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema({
  blockName: { type: String, required: true },
  plotNo: { type: String, required: true },
  purchaserName: { type: String, required: true },
  guardianName: { type: String, required: true },
  cnic: { type: String, required: true },
  mobileNo: { type: Number, required: true },
  address: { type: String },
  streetNo: { type: String },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
  },
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
  barcodeDigits: { type: String, required: true },
});

const Reservation = mongoose.model("reservation", reservationSchema);
module.exports = Reservation;
