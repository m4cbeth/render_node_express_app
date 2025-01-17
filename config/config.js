require('dotenv').config()
// could I just replace the whole thing with this?
// const { poststring } = require('../postgresstring.js')

module.exports = {
  development: {
    url: `postgres://mysitedb_sgc8_user:${process.env.PGPASSWORD}@dpg-cu00qtogph6c73chd840-a.oregon-postgres.render.com:5432/mysitedb_sgc8`,
    dialect: "postgres"
  },
  test: {
    url: `postgres://mysitedb_sgc8_user:${process.env.PGPASSWORD}@dpg-cu00qtogph6c73chd840-a.oregon-postgres.render.com:5432/mysitedb_sgc8`,
    dialect: "postgres"
  },
  production: {
    url: `postgres://mysitedb_sgc8_user:${process.env.PGPASSWORD}@dpg-cu00qtogph6c73chd840-a.oregon-postgres.render.com:5432/mysitedb_sgc8`,
    dialect: "postgres"
  }
}
