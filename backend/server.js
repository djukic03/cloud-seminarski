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
    INSERT IGNORE INTO users (username, fullName, email, password) VALUES ("admin", "admin admin", "admin@admin.com", "admin")
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

app.post("/users", (req, res) => {
  const { username, fullName, email, password } = req.body;
  const query =
    "INSERT INTO users (username, fullName, email, password) VALUES (?, ?, ?, ?)";
  connection.query(
    query,
    [username, fullName, email, password],
    (error, result) => {
      if (error) throw error;
      res.status(201).send(`User ${result.insertId} registered successfully`);
    }
  );
});

app.put("/users", (req, res) => {
  const { username, fullName, email } = req.body;
  const query = "UPDATE users SET fullName = ?, email = ? WHERE username = ?";
  connection.query(query, [fullName, email, username], (error, results) => {
    if (error) throw error;
    res.send(`User ${username} updated.`);
  });
});

app.post("/workouts", (req, res) => {
  const { username, date, workoutData } = req.body;
  const workout_ids = [];

  let workoutCount = workoutData.length;
  let completedWorkouts = 0;

  workoutData.forEach((workout) => {
    const { exercise, reps, set, weight } = workout;
    const query =
      "INSERT INTO workouts (exercise, reps, sets, weight) VALUES (?, ?, ?, ?)";

    connection.query(query, [exercise, reps, set, weight], (error, result) => {
      if (error) throw error;
      workout_ids.push(result.insertId);

      completedWorkouts++;
      if (completedWorkouts === workoutCount) {
        workout_ids.forEach((workout_id) => {
          const query =
            "INSERT INTO users_workouts (username, date, workout_id) VALUES (?, ?, ?)";
          connection.query(
            query,
            [username, date, workout_id],
            (error, result) => {
              if (error) throw error;
            }
          );
        });

        res.status(201).send("All workouts inserted successfully");
      }
    });
  });
});

app.get("/workouts/:username", (req, res) => {
  const { username } = req.params;

  const query = `
    SELECT uw.date, w.exercise, w.reps, w.sets, w.weight
    FROM users_workouts uw
    JOIN workouts w ON uw.workout_id = w.id
    WHERE uw.username = ?
    ORDER BY uw.date;
  `;

  connection.query(query, [username], (error, results) => {
    if (error) {
      console.error("Error fetching workouts:", error);
      return res.status(500).send("Server Error");
    }

    if (results.length === 0) {
      return res.status(404).send("No workouts found for this user");
    }

    const workoutDataByDate = results.reduce((acc, row) => {
      const { date, exercise, reps, sets, weight } = row;

      if (!acc[date]) {
        acc[date] = [];
      }

      acc[date].push({ exercise, reps, sets, weight });

      return acc;
    }, {});

    const structuredData = Object.keys(workoutDataByDate).map((date) => ({
      username: username,
      date: date,
      workoutData: workoutDataByDate[date],
    }));

    res.status(200).json(structuredData);
  });
});

// app.get("/workouts", (req, res) => {
//   connection.query("SELECT * FROM workouts", (err, results) => {
//     if (err) throw err;
//     res.send(results);
//   });
// });

// app.get("/users_workouts", (req, res) => {
//   connection.query("SELECT * FROM users_workouts", (err, results) => {
//     if (err) throw err;
//     res.send(results);
//   });
// });

app.delete("/workouts", (req, res) => {
  const query = "DELETE FROM workouts;";
  connection.query(query, (error, results) => {
    if (error) throw error;
    res.send(`Workouts deleted`);
  });
});
app.delete("/users_workouts", (req, res) => {
  const query = "DELETE FROM users_workouts;";
  connection.query(query, (error, results) => {
    if (error) throw error;
    res.send(`Workouts deleted`);
  });
});
app.delete("/users", (req, res) => {
  const query = "DELETE FROM users;";
  connection.query(query, (error, results) => {
    if (error) throw error;
    res.send(`Users deleted`);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
