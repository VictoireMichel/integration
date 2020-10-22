const express = require('express');
const router = express.Router();
const ctrUsers = require("../controllers/controllerUsers");

// Get All route
router.get("/all", (req, res)  => ctrUsers.getAll(req, res));
//Get One route
router.get("/one", (req, res)  => ctrUsers.getOne(req, res));

    // Create a new Customer
    router.post("/users", (req, res) => ctrUsers.create(req, res));
    // Retrieve all Customers
    router.get("/users", (req, res) => ctrUsers.findAll(req, res));

    // Retrieve a single Customer with customerId
    router.get("/users/:customerId",(req, res) => ctrUsers.findOne(req, res));

    // Update a Customer with customerId
    router.put("/users/:customerId", (req, res) => ctrUsers.update(req, res));

    // Delete a Customer with customerId
    router.delete("/users/:customerId", (req, res) => ctrUsers.delete(req, res));

    // Create a new Customer
    router.delete("/users", (req, res) => ctrUsers.deleteAll(req, res));

module.exports = router;
