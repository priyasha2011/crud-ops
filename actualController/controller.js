//getALl STUDENT LIST

// const db = require("../config/db");
const {updateDatabase,createDatabase,getStudent}= require("../controller/call")
const { deleteAll } = require("../controller/crudCommon");

const createStudentList = async (req, res) => {
    try {
        console.log(req.body); // Ensure that the request body is logged to verify the incoming data
        let obj={
        id: req.body.id,
        name: req.body.name,
        age:req.body.age
        }

        // Assuming createDatabase correctly creates a record and returns the created object or null if failed
        const createData = await createDatabase(obj);

        if (!createData) {
            // Corrected the way to send status and response
            return res.status(404).send({
                success: false,
                message: "No record found"
            });
        }

        // Assuming createData is an object, not an array. If it's supposed to be an array, adjust accordingly.
        res.status(200).send({
            success: true,
            message: "Student record created successfully",
            createData, // This sends the created student data
            // If createData is supposed to be an array of created records, then totalrecord makes sense
            totalrecord: Array.isArray(createData) ? createData.length : 1 // Adjusted to handle both object and array responses
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error: error.message // Sending error message for better debugging
        });
    }
};
const getStudentList = async(req,res)=>{
    try{

        let roll=req.body
        const data = await getStudent(roll)
        if(!data){
            return res.status(404)({
                success:false,
                message:"NO record found"
            })
        }
        res.status(200).send({
            success:true,
            message:"All student found",
            data,
            totalrecord: data.length
        })
    }
    catch(error){
        console.log(error);
        res.status(500).send({
            success: false,
            error
        })
    }
}



// Function to delete student list
const deleteStudentList = async (req, res) => {
    try {
        // Assuming filter criteria is sent in the request body
        const filter = req.body.filter;
        
        // Call deleteAll with the filter and modelName
        const result = await deleteAll({modelName: 'StudentDatabase' });
        
        // Check if any records were deleted
        if (result > 0) {
            res.status(200).send({
                success: true,
                message: `${result} student(s) deleted successfully`,
            });
        } else {
            res.status(404).send({
                success: false,
                message: "No students found matching the criteria",
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error: error.message,
        });
    }
};

// Add deleteStudentList to the module exports
module.exports = { getStudentList, createStudentList, deleteStudentList };



