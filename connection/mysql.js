const { Sequelize } = require("sequelize");
class SequelizeConn {
  async connectDB() {
    try {
      if (!SequelizeConn.sequelize) {
        const sequelizeOptions = {
          host: "localhost",
          port: 3306,
          dialect: "mysql",
          pool: {
            max: 10,
          },
          dialectOptions: {
            dateStrings: true,
            typeCast: true,
          },
        };
        sequelizeOptions.logging = false;
        sequelizeOptions.timezone = "+05:30";
         const sequelize = new Sequelize(
          "test", 
          "root",
          "Abc123#*",
          sequelizeOptions
        );
        await sequelize.authenticate();
        SequelizeConn.sequelize = sequelize;
        console.log("connected to BG database");
        this.importModels();
      } else {
        return false;
      }

      return true;
    } catch (err) {
      throw err;
    }
  }
  async closeConnection() {
    try {
      if (SequelizeConn.sequelize) await SequelizeConn.sequelize.close();
      SequelizeConn.sequelize = null;
      return true;
    } catch (err) {
      throw err;
    }
  }
  async importModels() {
    const StudentDatabaseData =
        require("../databaseModel/databaseModel")(SequelizeConn.sequelize)
    SequelizeConn.schema = {};
    SequelizeConn.schema[StudentDatabaseData.name] = StudentDatabaseData;
  }

  async setRelations() {}

  getSequelizeConn() {
    return SequelizeConn.sequelize;
  }
  getSequelizeSchema() {
    return SequelizeConn.schema;
  }
}
module.exports = SequelizeConn;
