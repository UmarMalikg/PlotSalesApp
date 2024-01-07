const express = require("express");
const path = require("path");
const router = express.Router();
const PlotBooking = require("../models/plotBookingSchema");

// Create a new employee
router.post("/", async (req, res) => {
  try {
    // Extract data from the request body
    const {
      blockName,
      plotNo,
      purchaserName,
      guardianName,
      cnic,
      streetNo,
      address,
      mobileNo,
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
    } = req.body;

    // Check if all required fields are provided
    if (
      !blockName ||
      !plotNo ||
      !purchaserName ||
      !guardianName ||
      !cnic ||
      !address ||
      !mobileNo ||
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
      !balanceAmountDueDate
    ) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    // Create a new town Planning instance with the extracted data
    const newPlotBooking = new PlotBooking({
      blockName,
      plotNo,
      purchaserName,
      guardianName,
      cnic,
      streetNo,
      address,
      mobileNo,
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
    });

    // Save the new employee to the database
    const savedPlotBooking = await newPlotBooking.save();

    res.status(201).json(savedPlotBooking);
  } catch (error) {
    // Check for duplicate key error
    console.error("Error creating a new Plot Booking:", error);
  }
});

// Get all employees
router.get("/", async (req, res) => {
  const selectedCategory = req.query.category;
  try {
    if (!selectedCategory) {
      const plotBooking = await PlotBooking.find();
      return res.status(200).json(plotBooking);
    }
    const plotBooking = await PlotBooking.find({ category: selectedCategory });
    if (!plotBooking || plotBooking.length === 0) {
      return res
        .status(404)
        .json({ message: "No Plot Booking found for the given category" });
    }

    return res.status(200).json(plotBooking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get employee by ID
router.get("/:id", async (req, res) => {
  try {
    const plotBooking = await PlotBooking.findById(req.params.id);
    if (!plotBooking) {
      return res.status(404).json({ message: "Plot Booking not found" });
    }
    res.json(plotBooking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update employee by ID
router.put("/:id", async (req, res) => {
  try {
    const plotBooking = await PlotBooking.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!plotBooking) {
      return res.status(404).json({ message: "Plot Booking not found" });
    }
    res.json(plotBooking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete employee by ID
router.delete("/:id", async (req, res) => {
  try {
    const plotBooking = await PlotBooking.findByIdAndDelete(req.params.id);
    if (!plotBooking) {
      return res.status(404).json({ message: "Plot Booking not found" });
    }
    res.json({ message: "Plot Booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
