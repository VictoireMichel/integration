const express = require('express');
const router = express.Router();
const ctrUsers = require("../controllers/controllerUsers");

// Get All route
router.get("/all", (req, res)  => ctrUsers.getAll(req, res));
//Get One route
router.get("/one", (req, res)  => ctrUsers.getOne(req, res));

module.exports = router;

module.exports = app => {
    const Users = require("../controllers/customer.controller.js");

    // Create a new Customer
    app.post("/users", Users.create);

    // Retrieve all Customers
    app.get("/users", Users.findAll);

    // Retrieve a single Customer with customerId
    app.get("/users/:customerId", Users.findOne);

    // Update a Customer with customerId
    app.put("/users/:customerId", Users.update);

    // Delete a Customer with customerId
    app.delete("/users/:customerId", Users.delete);

    // Create a new Customer
    app.delete("/users", Users.deleteAll);
};