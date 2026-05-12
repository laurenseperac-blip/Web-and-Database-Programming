const { query } = require("./db_connect");

async function createAssignmentTable() {

    let sql = `
        CREATE TABLE IF NOT EXISTS Assignment (
            assignment_id INT AUTO_INCREMENT,
            assignment_name VARCHAR(100) NOT NULL,
            progress VARCHAR(50),
            due_date DATE,
            class_id INT,
            student_id INT NOT NULL,
            PRIMARY KEY (assignment_id)
        );
    `;

    await query(sql);
}

createAssignmentTable();

async function createAssignment(assignment) {

    let sql = `
        INSERT INTO Assignment
        (assignment_name, progress, due_date, student_id)
        VALUES (?, ?, ?, ?)
    `;

    return await query(sql, [
        assignment.assignment_name,
        assignment.progress,
        assignment.due_date,
        assignment.student_id
    ]);
}

async function getAssignmentsByUser(studentId) {

    let sql = `
        SELECT *
        FROM Assignment
        WHERE student_id = ?
    `;

    return await query(sql, [studentId]);
}

async function getAllAssignments() {

    let sql = `SELECT * FROM Assignment`;

    return await query(sql);
}

async function updateAssignment(id, assignment_name) {

    let sql = `
        UPDATE Assignment
        SET assignment_name = ?
        WHERE assignment_id = ?
    `;

    return await query(sql, [assignment_name, id]);
}

async function deleteAssignment(id) {

    let sql = `
        DELETE FROM Assignment
        WHERE assignment_id = ?
    `;

    return await query(sql, [id]);
}

module.exports = {
    createAssignment,
    getAssignmentsByUser,
    getAllAssignments,
    updateAssignment,
    deleteAssignment
};