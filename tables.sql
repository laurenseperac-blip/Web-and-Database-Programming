CREATE DATABASE IF NOT EXISTS Study_Planner;
USE Study_Planner;

CREATE TABLE IF NOT EXISTS User (
    userId INT PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Class (
    class_id INT PRIMARY KEY AUTO_INCREMENT,
    class_name VARCHAR(100),
    instructor_name VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS Enrollment (
    enrollment_id INT PRIMARY KEY AUTO_INCREMENT,
    userId INT,
    class_id INT,

    FOREIGN KEY (userId) REFERENCES User(userId),
    FOREIGN KEY (class_id) REFERENCES Class(class_id)
);

CREATE TABLE IF NOT EXISTS Assignment (
    assignment_id INT PRIMARY KEY AUTO_INCREMENT,
    assignment_name VARCHAR(100),
    progress VARCHAR(50),
    due_date DATE,
    class_id INT,
    student_id INT,

    FOREIGN KEY (class_id) REFERENCES Class(class_id),
    FOREIGN KEY (student_id) REFERENCES User(userId)
);