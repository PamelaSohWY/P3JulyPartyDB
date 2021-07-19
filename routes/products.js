const express = require("express");
const router = express.Router();

// #1 import in product models from models 
const {Product}=require('../models')

router.get('/', async(req,res)=>{
// #2 fetch all the products 
let partyproducts = await Product.collection().fetch();
res.render('partyproducts/index', { 
    // create hbs file in the view
    'partyproducts': partyproducts.toJSON()
    // #3 convert collection to JSON
})
// what does products/index refer to ?

})

module.exports = router;