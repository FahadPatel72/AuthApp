
const express = require("express");

const router = express.Router();


const {login,signup} = require("../controllers/user");

const {auth,isStudent,isAdmin} = require("../middleware/Verify");


router.post("/login",login);

router.post("/signup",signup);


//define protected routes using middleware handler


//test route
router.get("/test",auth,(req,res)=>{

    return res.status(201).json({
        success:true,
        message:"Test Done Successfull,You can start now!"
    })

})

//for student
router.get("/student",auth,isStudent, (req,res)=>{
    res.send({
        success:true,
        message:"Welcome to Protected Route for Student"
    })
})


//for admin
router.get("/admin",auth,isAdmin, (req,res)=>{
    res.send({
        success:true,
        message:"Welcome to Protected Route for Admin"
    })
})


module.exports = router;