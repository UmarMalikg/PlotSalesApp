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
  plotSize: { type: String, required: true },
  ratePerMarla: { type: Number, required: true },
  extraPaymentFactor: { type: String, required: true },
  extraPaymentAmount: { type: String, required: true },
  streetNo: { type: String, required: true },
  salePrice: { type: String, required: true },
  installmentSalePrice: { type: String, required: true },
});

const TownPlanning = mongoose.model("townPlanning", townPlanningSchema);
module.exports = TownPlanning;
