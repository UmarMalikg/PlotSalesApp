const express = require("express");
const path = require("path");
const router = express.Router();
const Reservation = require("../models/reservationSchema");

// Create a new employee
router.post("/", async (req, res) => {
  try {
    // Extract data from the request body
    const {
      //   lotNo,
      blockName,
      plotNo,
      purchaserName,
      guardianName,
      cnic,
      mobileNo,
      address,
      streetNo,
      category,
      plotSize,
      ratePerMarla,
      extraPaymentFactor,
      extraFactorPaymenyt,
      totalPlotPayment,
      paymentMode,
      bankName,
      branchName,
      paymentDate,
      amountRecieved,
      balanceAmount,
      balanceAmountDueDate,
      barcodeDigits,
    } = req.body;

    // Check if all required fields are provided
    if (
      !blockName ||
      !plotNo ||
      !purchaserName ||
      !guardianName ||
      !cnic ||
      !mobileNo ||
      !address ||
      !category ||
      !extraFactorPaymenyt ||
      !totalPlotPayment ||
      !paymentMode ||
      !paymentDate ||
      !plotSize ||
      !ratePerMarla ||
      !extraPaymentFactor ||
      !amountRecieved ||
      !balanceAmount ||
      !balanceAmountDueDate ||
      !barcodeDigits
    ) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    // Create a new town Planning instance with the extracted data
    const newReservation = new Reservation({
      blockName,
      plotNo,
      purchaserName,
      guardianName,
      cnic,
      mobileNo,
      address,
      streetNo,
      category,
      plotSize,
      ratePerMarla,
      extraPaymentFactor,
      extraFactorPaymenyt,
      totalPlotPayment,
      paymentMode,
      bankName,
      branchName,
      paymentDate,
      amountRecieved,
      balanceAmount,
      balanceAmountDueDate,
      barcodeDigits,
    });

    // Save the new employee to the database
    const savedReservation = await newReservation.save();

    res.status(201).json(savedReservation);
  } catch (error) {
    // Check for duplicate key error
    console.error("Error creating a new Reservation:", error);
  }
});

// Get all employees
router.get("/", async (req, res) => {
  const selectedCategory = req.query.category;
  try {
    if (!selectedCategory) {
      const reservation = await Reservation.find();
      return res.status(200).json(reservation);
    }
    const reservation = await Reservation.find({ category: selectedCategory });
    if (!reservation || reservation.length === 0) {
      return res
        .status(404)
        .json({ message: "No reservation found for the given category" });
    }

    return res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get employee by ID
router.get("/:id", async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    if (!reservation) {
      return res.status(404).json({ message: "reservation not found" });
    }
    res.json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update employee by ID
router.put("/:id", async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!reservation) {
      return res.status(404).json({ message: "reservation not found" });
    }
    res.json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete employee by ID
router.delete("/:id", async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndDelete(req.params.id);
    if (!reservation) {
      return res.status(404).json({ message: "reservation not found" });
    }
    res.json({ message: "reservation deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
