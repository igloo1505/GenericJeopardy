const mongoose = require("mongoose");

const AggregatedSchema = mongoose.Schema(
  {
    _id: String,
    points: Array
  },
  { collection: "Category" }
);

module.exports = mongoose.model("Aggregated", AggregatedSchema);
