const mongoose = require("mongoose");

const plotBookingSchema = mongoose.Schema({
  blockName: { type: String, required: true },
  plotNo: { type: String, required: true },
  purchaserName: { type: String, required: true },
  guardianName: { type: String, required: true },
  cnic: { type: Number, required: true },
  mobileNo: { type: Number, required: true },
  address: { type: String },
  streetNo: { type: String },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
  },

  plotSize: { type: Number, required: true },
  ratePerMarla: { type: Number, required: true },
  extraPaymentFactor: { type: String, required: true },
  extraFactorPaymenyt: { type: Number, required: true },
  totalPlotPayment: { type: Number, required: true },
  paymentMode: { type: mongoose.Schema.Types.ObjectId, ref: "paymentModes" },
  bankName: { type: String, required: true },
  branchName: { type: String, required: true },
  paymentDate: { type: Date, required: true },
  alreadyAmountRecieved: { type: Number, required: true, default: 0 },
  amountRecieved: { type: Number, required: true },
  balanceAmount: { type: Number, required: true },
  balanceAmountDueDate: { type: Date, required: true },
  barcodeDigits: { type: String, required: true },
});

const PlotBooking = mongoose.model("plotBooking", plotBookingSchema);
module.exports = PlotBooking;
