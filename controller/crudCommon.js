const SequelizeConn = new (require("../connection/mysql"));
const Sequelize = require('sequelize');
 
const create = async ({ createObj, modelName }) => {
  const schema = SequelizeConn.getSequelizeSchema();
  const model = schema[modelName];
  return await model.create(createObj);
};
 
const update = async ({ updateObj, filter, modelName }) => {
  const schema = SequelizeConn.getSequelizeSchema();
  const model = schema[modelName];
  console.log("update -schema:" + schema);
  return await model.update(updateObj, {
    where: filter,
    
  });
};

 
const findAll = async ({ filter, modelName }) => {
  const schema = SequelizeConn.getSequelizeSchema();
  const model = schema[modelName];
  const result = await model.findAll({
    where: filter,
    attributes: ['name'], // Specify that only the 'name' attribute should be included
  });
  return result;
};

const deleteAll = async ({ modelName }) => {
  const schema = SequelizeConn.getSequelizeSchema();
  const model = schema[modelName];
  const result = await model.destroy({
    where: {
      name: null // This will target all records where the name is null
    },
  });
  return result;
};


 
module.exports = {
  findAll,
  create,
  update,
  deleteAll
};
 


// in that folder create respositary where all crudCommon function call


