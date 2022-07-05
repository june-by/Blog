module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Visitor",
    {
      date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
  );
};
