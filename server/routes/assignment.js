const express = require("express");
const router = express.Router();
const Assignment = require("../models/assignment");

router.get('/getAllAssignments', async (req, res) => {
    try {
        const assignments = await Assignment.getAllAssignments();
        res.send(assignments);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

module.exports = router;