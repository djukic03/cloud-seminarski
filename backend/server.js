import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mysql from "mysql2";

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "athlete-x-database",
  user: "admin",
  password: "admin",
  database: "athlete_x_database",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to database");

  const createUsersTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      username VARCHAR(255) UNIQUE NOT NULL PRIMARY KEY,
      fullName VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    );`;

  connection.query(createUsersTableQuery, (err, result) => {
    if (err) throw err;
    console.log("Users table created successfully");
  });

  const createWorkoutsTableQuery = `
    CREATE TABLE IF NOT EXISTS workouts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      exercise VARCHAR(255) NOT NULL,
      reps INT NOT NULL,
      sets INT NOT NULL,
      weight DECIMAL(5, 2) NOT NULL
    );`;

  connection.query(createWorkoutsTableQuery, (err, result) => {
    if (err) throw err;
    console.log("Workouts table created successfully");
  });

  const createUserWorkoutsTableQuery = `
    CREATE TABLE IF NOT EXISTS users_workouts (
      username VARCHAR(255) NOT NULL,
      date VARCHAR(255) NOT NULL,
      workout_id INT NOT NULL,
      PRIMARY KEY (username, workout_id),
      FOREIGN KEY (username) REFERENCES users(username),
      FOREIGN KEY (workout_id) REFERENCES workouts(id)
    );`;

  connection.query(createUserWorkoutsTableQuery, (err, result) => {
    if (err) throw err;
    console.log("User-Workouts table created successfully");
  });

  const insertIntoUsersTableQuery = `
    INSERT INTO users (username, fullName, email, password) VALUES ("admin", "admin admin", "admin@admin.com", "admin")
  `;
  connection.query(insertIntoUsersTableQuery, (err, result) => {
    if (err) throw err;
    console.log("Admin user inserted successfully");
  });
});

app.get("/users", (req, res) => {
  connection.query("SELECT * FROM users", (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

/* ***********************************************************

  ODAVDE NA DOLE NE VALJA

************************************************************** */

app.post("/api/register", async (req, res) => {
  const { username, fullName, email, password } = req.body;

  try {
    const connection = await pool.getConnection();
    const [result] = await connection.execute(
      "INSERT INTO users (username, fullName, email, password) VALUES (?, ?, ?, ?)",
      [username, fullName, email, password]
    );
    connection.release();
    res.send("User registered successfully");
  } catch (err) {
    console.error("Error handling database:", err);
    res.status(500).send("Server Error");
  }
});

app.put("/api/updateUser", async (req, res) => {
  const { username, fullName, email } = req.body;

  try {
    const connection = await pool.getConnection();
    const [result] = await connection.execute(
      "UPDATE users SET fullName = ?, email = ? WHERE username = ?",
      [fullName, email, username]
    );
    connection.release();

    if (result.affectedRows === 0) {
      return res.status(404).send("User not found");
    }

    res.send("User updated successfully");
  } catch (err) {
    console.error("Error handling database:", err);
    res.status(500).send("Server Error");
  }
});

app.post("/api/saveWorkout", async (req, res) => {
  const { username, date, workoutData } = req.body;

  try {
    const connection = await pool.getConnection();

    const workoutIds = [];
    for (const workout of workoutData) {
      const { exercise, reps, sets, weight } = workout;
      const [result] = await connection.execute(
        "INSERT INTO workouts (exercise, reps, sets, weight) VALUES (?, ?, ?, ?)",
        [exercise, reps, sets, weight]
      );
      workoutIds.push(result.insertId);
    }

    for (const workoutId of workoutIds) {
      await connection.execute(
        "INSERT INTO users_workouts (username, date, workout_id) VALUES (?, ?, ?)",
        [username, date, workoutId]
      );
    }

    connection.release();
    res.send("Workout saved successfully");
  } catch (err) {
    console.error("Error handling database:", err);
    res.status(500).send("Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
