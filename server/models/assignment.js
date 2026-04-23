const { query } = require("./db_connect");

async function createAssignmentTable() {
    let sql = `
      CREATE TABLE IF NOT EXISTS Assignment (
        assignmentId INT AUTO_INCREMENT,
        description VARCHAR(255) NOT NULL,
        CONSTRAINT assignmentPK PRIMARY KEY(assignmentId)
      );
    `;
    await query(sql);
}

createAssignmentTable();

async function getAllAssignments() {
    let sql = `SELECT * FROM Assignment;`;
    return await query(sql);
}

module.exports = { getAllAssignments };