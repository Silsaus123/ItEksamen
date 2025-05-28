const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "eksamendatabase",
    multipleStatements: true
});

app.get("/", (req, res) => {
  const query = `
    SELECT u.userName, s.score
    FROM users u
    JOIN scoreboard s ON u.userID = s.userID
    ORDER BY s.score DESC;
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error("Failed to fetch leaderboard:", err);
      return res.status(500).json({ error: "Failed to load leaderboard" });
    }

    return res.json({ leaderboard: results });
  });
});


app.post("/addUser", (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ error: "Username is required" });
  }

  const userQuery = "INSERT INTO users (userName) VALUES (?)";

  db.query(userQuery, [username], (err, result) => {
    if (err) {
      console.error("skill issue Database error:", err);
      return res.status(500).json({ error: "Failed to insert user" });
    }

    const userId = result.insertId; // 💡 This is the magic part
    res.json({ message: "User added successfully.", userId }); // send it to client
  });
});



app.post("/updateScore", (req, res) => {
  const { userId, score } = req.body;

  const query = `
  INSERT INTO scoreboard (userID, score)
  VALUES (?, ?)
  ON DUPLICATE KEY UPDATE score = VALUES(score)
`;
  db.query(query, [userId, score], (err) => {
    if (err) {
      console.error("Failed to update score:", err);
      return res.status(500).json({ error: "Failed to update score" });
    }

    res.json({ message: "Score saved successfully." });
  });
});





app.listen(8081, () => {
    console.log("OMFG TOOK YOU LONG ENOUGH -50 AURA POINTS");
});
