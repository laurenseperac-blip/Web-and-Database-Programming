require('dotenv').config();
const express = require("express");
const app = express();

app.use(express.json());

const userRoutes = require("./server/routes/user");
const assignmentRoutes = require("./server/routes/assignment");

app.use("/users", userRoutes);
app.use("/assignments", assignmentRoutes);

const PORT = process.env.PORT || 3500;

app.listen(PORT, () => 
    console.log(`Server listening on port ${PORT}!!`)
);