require('dotenv').config()
module.exports = {
  development: {
    url: "postgres://mysitedb_sgc8_user:pVy8tjDH7zPwUUcb3AM1Yikv9mXAczzm@dpg-cu00qtogph6c73chd840-a.oregon-postgres.render.com:5432/mysitedb_sgc8",
    dialect: "postgres"
  },
  test: {
    url: "postgres://mysitedb_sgc8_user:pVy8tjDH7zPwUUcb3AM1Yikv9mXAczzm@dpg-cu00qtogph6c73chd840-a.oregon-postgres.render.com:5432/mysitedb_sgc8",
    dialect: "postgres"
  },
  production: {
    url: "postgres://mysitedb_sgc8_user:pVy8tjDH7zPwUUcb3AM1Yikv9mXAczzm@dpg-cu00qtogph6c73chd840-a.oregon-postgres.render.com:5432/mysitedb_sgc8",
    dialect: "postgres"
  }
}
