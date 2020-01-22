const mongoose = require("mongoose");

const MasterSchema = mongoose.Schema({
  password: {
    type: String
  }
});

module.exports = mongoose.model("Master", MasterSchema);
