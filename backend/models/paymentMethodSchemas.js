const mongoose = require("mongoose");

const paymentMethodSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const PaymentMethods = mongoose.model("paymentMethods", paymentMethodSchema);
module.exports = PaymentMethods;
