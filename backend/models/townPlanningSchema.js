const mongoose = require("mongoose");

const townPlanningSchema = mongoose.Schema({
  lotNo: { type: String, required: true },
  blockName: { type: String, required: true },
  plotNo: { type: String, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
  },
  dimension: { type: String, required: true },
  plotSize: { type: Number, required: true },
  ratePerMarla: { type: Number, required: true },
  marlaSize: { type: Number, required: true },
  extraPaymentFactor: { type: String, required: true },
  extraPaymentAmount: { type: Number, required: true },
  streetNo: { type: String, required: true },
  salePrice: { type: Number, required: true },
  installmentSalePrice: { type: Number, required: true },
  barcodeDigits: { type: String, required: true },
});

const TownPlanning = mongoose.model("townplannings", townPlanningSchema);
module.exports = TownPlanning;
