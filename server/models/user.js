const { query } = require("./db_connect");
const bcrypt = require("bcrypt");

async function createUserTable() {
    let sql = `
      CREATE TABLE IF NOT EXISTS User (
        userId INT AUTO_INCREMENT,
        firstName VARCHAR(50) NOT NULL,
        lastName VARCHAR(50) NOT NULL,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        CONSTRAINT userPK PRIMARY KEY(userId)
      );
    `;

    await query(sql);
}

createUserTable();

async function registerUser(user) {

    let existingUser = await getUserByEmail(user.email);

    if (existingUser) {
        throw Error("Email already in use!");
    }

    let hashedPassword = await bcrypt.hash(user.password, 10);

    let sql = `
        INSERT INTO User(firstName, lastName, password, email)
        VALUES (?, ?, ?, ?)
    `;

    await query(sql, [
        user.firstName,
        user.lastName,
        hashedPassword,
        user.email
    ]);

    return await loginUser(user.email, user.password);
}

async function loginUser(email, password) {

    let user = await getUserByEmail(email);

    if (!user) {
        throw Error("Email not found!");
    }

    let match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw Error("Password incorrect!");
    }

    return user;
}

async function getUserByEmail(email) {

    let sql = `
        SELECT * FROM User
        WHERE email = ?
    `;

    let users = await query(sql, [email]);

    return users[0];
}

async function getAllUsers() {

    let sql = `SELECT * FROM User`;

    return await query(sql);
}

async function updateUser(userId, firstName, lastName, email) {
    let sql = `
        UPDATE User
        SET firstName = ?, lastName = ?, email = ?
        WHERE userId = ?
    `;

    return await query(sql, [firstName, lastName, email, userId]);
}

async function deleteUser(userId) {

    let sql = `
        DELETE FROM User
        WHERE userId = ?
    `;

    return await query(sql, [userId]);
}

module.exports = {
    registerUser,
    loginUser,
    getUserByEmail,
    getAllUsers,
    updateUser,
    deleteUser
};