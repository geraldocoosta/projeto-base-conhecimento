module.exports = {
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    database: "knowledge",
    user: "postgres",
    password: "123456"
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: "knex_migrations"
  }
};
