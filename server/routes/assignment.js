const express = require("express");
const router = express.Router();
const Assignment = require("../models/assignment");

router.post("/", async (req, res) => {

    const result = await Assignment.createAssignment(req.body);

    res.send(result);
});

router.get("/:student_id", async (req, res) => {

    const assignments = await Assignment.getAssignmentsByUser(
        req.params.student_id
    );

    res.send(assignments);
});

router.get("/", async (req, res) => {

    const assignments = await Assignment.getAllAssignments();

    res.send(assignments);
});

router.put("/:id", async (req, res) => {

    const result = await Assignment.updateAssignment(
        req.params.id,
        req.body.assignment_name
    );

    res.send(result);
});

router.delete("/:id", async (req, res) => {

    const result = await Assignment.deleteAssignment(req.params.id);

    res.send(result);
});

module.exports = router;