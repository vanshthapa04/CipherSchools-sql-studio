import dotenv from "dotenv";
dotenv.config();

import pkg from "pg";

const { Pool } = pkg;

console.log("DB URL:", process.env.POSTGRES_URL);

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL
});

export default pool;