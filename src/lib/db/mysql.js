import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'htl-projekt.com',
    user: 'teamucmeraj',
    port: 33060,
    password: '!Insy_2024$',
    database: '2024_4aw_teamucmeraj_adabeachbar'
});

export async function query(sql, params) {
    const [rows] = await pool.execute(sql, params);
    return rows;
}
