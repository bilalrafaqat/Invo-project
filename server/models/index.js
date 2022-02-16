const Sequelize = require("sequelize");
const sequelize = new Sequelize('invo_db', 'postgres', 'farcry', {
  host: 'localhost',
  dialect: 'postgres',
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user")(sequelize, Sequelize);

module.exports = db;
