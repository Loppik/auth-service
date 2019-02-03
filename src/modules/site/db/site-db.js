const { sequelize, Sequelize } = require('../../../sequelize');

exports.addSite = siteName => {
  const siteTable = sequelize.define(
    siteName,
    {
      user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
      },
      email: {
        type: Sequelize.STRING(50),
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true,
        }
      },
      password: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
    },
    {
      freezeTableName: true,
    }
  );
  siteTable.sync();
}