import pool from "../database/postgre.js";

export const runQuery = async (req, res) => {
  try {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({
        error: "Query is required"
      });
    }

    
    if (!query.trim().toLowerCase().startsWith("select")) {
      return res.status(400).json({
        error: "Only SELECT queries are allowed"
      });
    }

    const result = await pool.query(query);

    res.json({
      rows: result.rows,
      rowCount: result.rowCount
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message
    });
  }
};