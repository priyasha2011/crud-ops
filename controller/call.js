const { create,update,findAll} = require('./crudCommon');
 
const getStudent = async (filter) => {
    return await findAll({filter ,modelName :'StudentDatabase'});  
}
const createDatabase = async (createObj) => {
    return create({createObj, modelName: 'StudentDatabase'});
}
 
const updateDatabase = async (updateObj, filter) => {
    return update({updateObj, filter, modelName: 'StudentDatabase'});
}

const deleteDatabase = async (filter) => {
    return deleteAll({filter, modelName: 'StudentDatabase'});
}
 
 
 
module.exports = {getStudent  , createDatabase , updateDatabase, deleteDatabase}