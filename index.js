const express = require("express");
const connectDB = require("./config/mongodb");
const app = express();

app.get("/", (req, res) => res.send("App is Running 😎"));

// middelware
app.use(express.json({ extended: false }));

// mongodb connection
connectDB();

// define routes
app.use("/api", require("./routes/api"));

// start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
