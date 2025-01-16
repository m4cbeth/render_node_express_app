const pg = require('pg');
const { Pool } = pg;

const pool = new Pool({
  host: "dpg-cu00qtogph6c73chd840-a.oregon-postgres.render.com",
  ssl: true,
});

const query = (text, params, callback) => {
  return pool.query(text, params, callback);
};

module.exports = { query };