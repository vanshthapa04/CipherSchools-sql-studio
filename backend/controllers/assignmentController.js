import pool from "../database/postgre.js";

export const getAssignments = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM assignments");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch assignments" });
  }
};

export const getAssignment = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM assignments WHERE id = $1",
      [req.params.id]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch assignment" });
  }
};