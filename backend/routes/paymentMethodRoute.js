const express = require("express");
const PaymentMethods = require("../models/paymentMethodSchemas");

const router = express.Router();

// Gettng the categories
router.get("/", async (req, res) => {
  try {
    const paymentMethods = await PaymentMethods.find();

    if (!paymentMethods || paymentMethods.length === 0) {
      res.status(404).json({ message: "No paymentMethods found" });
    } else {
      res.status(200).json(paymentMethods);
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// post new category

router.post("/", async (req, res) => {
  try {
    const newPaymentMethods = new PaymentMethods(req.body);

    if (!newPaymentMethods.name) {
      return res.status(400).json({ error: "Name is required field" });
    }

    const savedPaymentMethods = await newPaymentMethods.save();

    res.status(201).json(savedPaymentMethods);
  } catch (error) {
    res.status(500).json({ error: "Error creating a new Payment Method" });
  }
});

// Deletng a category
router.delete("/:Id", async (req, res) => {
  try {
    const paymentId = req.params.Id;
    const existingPaymentMethod = await PaymentMethods.findById(paymentId);

    if (!existingPaymentMethod) {
      return res.status(404).json({ error: "PaymentMethod not found" });
    }

    await PaymentMethods.findByIdAndDelete(paymentId);

    res.status(204).send("payment Method Deleted");
  } catch (error) {
    res.status(500).json({ error: "Error deleting the payment Method" });
  }
});

//Updatng a category
router.put("/:Id", async (req, res) => {
  try {
    const paymentId = req.params.Id;
    const updateData = req.body;

    // Check if the table exists
    const existingPaymentMethod = await PaymentMethods.findById(paymentId);

    if (!existingPaymentMethod) {
      return res.status(404).json({ error: "Payment Method not found" });
    }

    // Update the table
    await PaymentMethods.findByIdAndUpdate(paymentId, updateData, {
      new: true,
    });

    res.status(200).json({ message: "Payment Method updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error updating the Payment Method" });
  }
});

// Getting a single category
router.get("/:Id", async (req, res) => {
  try {
    const paymentId = req.params.Id;

    // Find the table by ID
    const paymentMethod = await Category.findById(paymentId);

    if (!paymentMethod) {
      return res.status(404).json({ error: "paymentMethod not found" });
    }

    res.status(200).json(paymentMethod);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving the paymentMethod" });
  }
});

module.exports = router;
