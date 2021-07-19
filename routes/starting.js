const express = require("express");
//#1 Creating a new express Router 
const router = express.Router();

//#2 New Route to the Express Router 
router.get('/', (req,res)=>{
    res.send("Starting page") 
    // need to change this
})

//#3 export out the router
module.exports = router