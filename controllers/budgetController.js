const express = require("express");

const budget = express.Router();// setup the router


const budgetArray = require("../models/budget.js");// getting the data


budget.get("/", (req, res) => {
     res.send(budgetArray);
});

budget.get("/:id", (req, res) => {
     const id = req.params.id;
     if(budgetArray[id]){
     res.send(budgetArray[id]);
     }
});


// budget.post("/", (req, res) => {
//     if(budgetArray.push(req.body)){
//     res.send(budgetArray);
//     }
// });

// budget.put("/:id", (req, res) => {
//      const id = req.params.id;
//      console.log(id);
//         if(budgetArray[id]){
//         budgetArray[id] = req.body;
//         res.send(budgetArray[id]);   
//      }
// });

// budget.delete("/:id", (req, res) => {
//     const id = req.params.id;
//     res.send(budgetArray[id]);
// });





module.exports = budget