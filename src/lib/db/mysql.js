import mysql from 'mysql2/promise';
import { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } from '$env/static/private';

const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  port: Number(DB_PORT) || 33060,
  password: DB_PASSWORD,
  database: DB_NAME
});

export async function query(sql, params) {
  const [rows] = await pool.execute(sql, params);
  return rows;
}
