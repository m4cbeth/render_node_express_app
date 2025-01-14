import pg from 'pg'
const { Pool } = pg
 
const pool = new Pool({
    host: "dpg-cu00qtogph6c73chd840-a.oregon-postgres.render.com",
    ssl: true,
});
 
export const query = (text, params, callback) => {
  return pool.query(text, params, callback)
}