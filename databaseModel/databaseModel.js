const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize) => {
  class StudentDatabase extends Model {}
  StudentDatabase.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(20),
      primaryKey: false
    },
    age: {
        type: DataTypes.INTEGER,
        primaryKey: false
      },
    // fess: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: false
    // },
    // class: {
    //   type: DataTypes.STRING(4),
    //   primaryKey: false
    // },
    // medium: {
    //   type: DataTypes.STRING(45),
    //   primaryKey : false
    // },
    },
{
  sequelize,
  modelName: 'StudentDatabase',
  tableName: 'testcase',
  timestamps: false
});
 
return StudentDatabase;
 
}
