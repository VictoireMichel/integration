const Users = require("../models/modelUsers");

exports.getAll = function(req, res) {
    Users.findAll()
        .then(results => res.json(results))
        .catch(error => res.status(400).json({error}));
};

exports.getOne = function(req, res) {
    Users.findAll({
        where: {
            id: req.query.id
        }
    })
        .then(results => res.json(results))
        .catch(error => res.status(400).json(error));
};
/*
exports.create = function(req, res) {
    Users.findOrCreate()
        .then(results => res.json(results))
        .catch(error => res.status(400).json(error));
};


exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Customer
    const customer = Users({
        mail: req.body.mail,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        learningMode: req.body.learningMode,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt
    });

    // Save Customer in the database
    Users.create(customer, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Customer."
            });
        else res.send(data);
    });
}
    exports.findAll = (req, res) => {
        Users.getAll((err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving customers."
                });
            else res.send(data);
        });
    };
    exports.findOne = (req, res) => {
        Users.findById(req.params.customersId, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Customer with id ${req.params.customerId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error retrieving Customer with id " + req.params.customerId
                    });
                }
            } else res.send(data);
        });
    };

    exports.update = (req, res) => {
        // Validate Request
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
        }

        Users.updateById(
            req.params.customerId,
            new Users(req.body),
            (err, data) => {
                if (err) {
                    if (err.kind === "not_found") {
                        res.status(404).send({
                            message: `Not found Customer with id ${req.params.customerId}.`
                        });
                    } else {
                        res.status(500).send({
                            message: "Error updating Customer with id " + req.params.customerId
                        });
                    }
                } else res.send(data);
            }
        );
    };

    exports.delete = (req, res) => {
        Users.remove(req.params.customerId, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Customer with id ${req.params.customerId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Could not delete Customer with id " + req.params.customerId
                    });
                }
            } else res.send({ message: `Customer was deleted successfully!` });
        });
    };

    exports.deleteAll = (req, res) => {
        Users.removeAll((err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while removing all customers."
                });
            else res.send({ message: `All Customers were deleted successfully!` });
        });
    };*/