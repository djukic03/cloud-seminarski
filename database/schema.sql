CREATE DATABASE athlete_x_database;
USE athlete_x_database;

CREATE TABLE users (
    username VARCHAR(255) UNIQUE NOT NULL PRIMARY KEY,
    fullName VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE workouts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    exercise VARCHAR(255) NOT NULL,
    reps INT NOT NULL,
    sets INT NOT NULL,
    weight DECIMAL(5, 2) NOT NULL
);

CREATE TABLE users_workouts (
    username VARCHAR(255) NOT NULL,
    date VARCHAR(255) NOT NULL,
    workout_id INT NOT NULL,
    PRIMARY KEY (username, workout_id),
    FOREIGN KEY (username) REFERENCES users(username),
    FOREIGN KEY (workout_id) REFERENCES workouts(id)
);

INSERT INTO users (username, fullName, email, password) 
VALUES ("admin", "admin admin", "admin@admin.com", "admin")