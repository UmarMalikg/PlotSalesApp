const express = require("express");
const path = require("path");
const router = express.Router();
const TownPlanning = require("../models/townPlanningSchema");

// Create a new employee
router.post("/", async (req, res) => {
  try {
    // Extract data from the request body
    const {
      lotNo,
      blockName,
      plotNo,
      category,
      dimension,
      plotSize,
      ratePerMarla,
      marlaSize,
      extraPaymentFactor,
      extraPaymentAmount,
      streetNo,
      salePrice,
      installmentSalePrice,
      barcodeDigits,
    } = req.body;

    // Check if all required fields are provided
    if (
      !lotNo ||
      !blockName ||
      !plotNo ||
      !category ||
      !dimension ||
      !plotSize ||
      !ratePerMarla ||
      !marlaSize ||
      !extraPaymentFactor ||
      !extraPaymentAmount ||
      !streetNo ||
      !salePrice ||
      !installmentSalePrice ||
      !barcodeDigits
    ) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    // Create a new town Planning instance with the extracted data
    const newTownPlan = new TownPlanning({
      lotNo,
      blockName,
      plotNo,
      category,
      dimension,
      plotSize,
      ratePerMarla,
      marlaSize,
      extraPaymentFactor,
      extraPaymentAmount,
      streetNo,
      salePrice,
      installmentSalePrice,
      barcodeDigits,
    });

    // Save the new employee to the database
    const savedTownPan = await newTownPlan.save();

    res.status(201).json(savedTownPan);
  } catch (error) {
    // Check for duplicate key error
    console.error("Error creating a new town plan:", error);
  }
});

// Get all employees
router.get("/", async (req, res) => {
  const selectedCategory = req.query.category;
  try {
    if (!selectedCategory) {
      const townPlans = await TownPlanning.find();
      return res.status(200).json(townPlans);
    }
    const townPlans = await TownPlanning.find({ category: selectedCategory });
    if (!townPlans || townPlans.length === 0) {
      return res
        .status(404)
        .json({ message: "No townPlans found for the given category" });
    }

    return res.status(200).json(townPlans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get employee by ID
router.get("/:id", async (req, res) => {
  try {
    const townPlans = await TownPlanning.findById(req.params.id);
    if (!townPlans) {
      return res.status(404).json({ message: "townPlans not found" });
    }
    res.json(townPlans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update employee by ID
router.put("/:id", async (req, res) => {
  try {
    const townPlans = await TownPlanning.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!townPlans) {
      return res.status(404).json({ message: "townPlans not found" });
    }
    res.json(townPlans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete employee by ID
router.delete("/:id", async (req, res) => {
  try {
    const townPlans = await TownPlanning.findByIdAndDelete(req.params.id);
    if (!townPlans) {
      return res.status(404).json({ message: "townPlans not found" });
    }
    res.json({ message: "townPlans deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
