const express = require("express");

const connectDB = require("./config/db");
const path = require("path");

const auth = require("./middleware/auth");

const app = express();

// Connect Database by calling simple function in external connectDB file brought in above
connectDB();

// INIT middleware to parse body
app.use(express.json({ extended: false }));

// // DEFINE ROUTES
app.use("/users", require("./routes/Users"));
app.use("/auth", require("./routes/Auth"));
app.use("/questions", require("./routes/Questions"));
app.use("/category", require("./routes/Category"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Successfully started on port ${PORT}`));
