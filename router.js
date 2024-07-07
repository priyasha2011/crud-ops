const express  = require('express');
const { getStudentList,createStudentList,deleteStudentList } = require('./actualController/controller')
const router = express.Router()
router.get('/getall',getStudentList)
router.post('/create',createStudentList)
router.delete('/deleteAll', deleteStudentList);

module.exports = router
