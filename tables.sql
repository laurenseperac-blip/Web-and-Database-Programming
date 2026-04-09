CREATE DATABASE if not exists Study_Planner;
use Study_Planner;

CREATE TABLE if not exists Student (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    password VARCHAR(100)
);

CREATE TABLE if not exists Class (
    class_id INT PRIMARY KEY AUTO_INCREMENT,
    class_name VARCHAR(100),
    instructor_name VARCHAR(100)
);

CREATE TABLE if not exists Enrollment (
    enrollment_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    class_id INT,
    FOREIGN KEY (student_id) REFERENCES Student(student_id),
    FOREIGN KEY (class_id) REFERENCES Class(class_id)
);

CREATE TABLE if not exists Assignment (
    assignment_id INT PRIMARY KEY AUTO_INCREMENT,
    assignment_name VARCHAR(100),
    progress VARCHAR(50),
    due_date DATE,
    class_id INT,
    student_id INT,
    FOREIGN KEY (class_id) REFERENCES Class(class_id),
    FOREIGN KEY (student_id) REFERENCES Student(student_id)
);