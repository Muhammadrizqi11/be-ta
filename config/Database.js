import { Sequelize } from "sequelize";

const db = new Sequelize("studiobook", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
