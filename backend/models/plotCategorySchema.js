const mongoose = require("mongoose");

const plotCategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Category = mongoose.model("categories", plotCategorySchema);
module.exports = Category;
