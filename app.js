const express = require("express");

const app = express(); // calling the express function
const cors = require("cors"); // importing cors connects the backend with the frontend

const budgetController = require("./controllers/budgetController");

app.use(cors()); // using cors
app.use(express.json()); // use  for create , update ,delete

app.use("/budget", budgetController);

app.get("/", (req, res) => { 
    res.send("Hello World")
});

module.exports = app