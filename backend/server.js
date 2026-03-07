import express from "express";
import cors from "cors";
import { pool } from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());

/* TEST ROUTE */

app.get("/api/test", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (error) {
    console.error("DB ERROR:", error);
    res.status(500).json({ error: error.message });
  }
});

/* LOGIN */

import bcrypt from "bcrypt";

app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (result.rows.length === 0) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    const user = result.rows[0];

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.json({
        success: false,
        message: "Invalid password",
      });
    }

    res.json({
      success: true,
      token: "demo-token",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

/* REGISTER */

app.post("/api/auth/register", (req, res) => {
  const { name, email } = req.body;

  res.json({
    success: true,
    message: "User registered",
    user: { name, email },
  });
});

/* START SERVER */

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
