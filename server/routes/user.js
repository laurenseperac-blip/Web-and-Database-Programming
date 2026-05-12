const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/register", async (req, res) => {

    try {

        const result = await User.registerUser(req.body);

        res.send(result);

    } catch (err) {

        res.status(400).send({
            message: err.message
        });
    }
});

router.post("/login", async (req, res) => {

    try {

        const user = await User.loginUser(
            req.body.email,
            req.body.password
        );

        res.send(user);

    } catch (err) {

        res.status(401).send({
            message: err.message
        });
    }
});

router.get("/", async (req, res) => {

    const users = await User.getAllUsers();

    res.send(users);
});

router.put("/:id", async (req, res) => {
    const result = await User.updateUser(
        req.params.id,
        req.body.firstName,
        req.body.lastName,
        req.body.email
    );

    res.send(result);
});

router.delete("/:id", async (req, res) => {

    const result = await User.deleteUser(req.params.id);

    res.send(result);
});

module.exports = router;