module.exports = app => {
    const Users = require("../controllers/customer.controller.js");

    // Create a new Customer
    app.post("/Users", Users.create);

    // Retrieve all Customers
    app.get("/Users", Users.findAll);

    // Retrieve a single Customer with customerId
    app.get("/Users/:customerId", Users.findOne);

    // Update a Customer with customerId
    app.put("/Users/:customerId", Users.update);

    // Delete a Customer with customerId
    app.delete("/Users/:customerId", Users.delete);

    // Create a new Customer
    app.delete("/Users", Users.deleteAll);
};