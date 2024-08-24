import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { readFile, writeFile } from "fs/promises";

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/register", async (req, res) => {
  const userData = req.body;

  try {
    const data = await readFile("./public/usersData.json", "utf8");
    const users = JSON.parse(data);
    users.push(userData);

    await writeFile("./public/usersData.json", JSON.stringify(users, null, 2));
    res.send("User registered successfully");
  } catch (err) {
    console.error("Error handling file:", err);
    res.status(500).send("Server Error");
  }
});

app.put("/api/updateUser", async (req, res) => {
  const { username, fullName, email } = req.body;

  try {
    const data = await readFile("./public/usersData.json", "utf8");
    const users = JSON.parse(data);
    const userIndex = users.findIndex((user) => user.username === username);
    if (userIndex === -1) {
      return res.status(404).send("User not found");
    }

    users[userIndex] = {
      ...users[userIndex],
      fullName,
      email,
    };

    await writeFile("./public/usersData.json", JSON.stringify(users, null, 2));
    res.send("User updated successfully");
  } catch (err) {
    console.error("Error handling file:", err);
    res.status(500).send("Server Error");
  }
});

app.post("/api/saveWorkout", async (req, res) => {
  const { username, date, workoutData } = req.body;

  try {
    const data = await readFile("./public/workouts.json", "utf8");
    const workouts = JSON.parse(data);
    const newWorkout = { username, date, workoutData };
    workouts.push(newWorkout);

    await writeFile(
      "./public/workouts.json",
      JSON.stringify(workouts, null, 2)
    );
    res.send("Workout saved successfully");
  } catch (err) {
    console.error("Error handling file:", err);
    res.status(500).send("Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
