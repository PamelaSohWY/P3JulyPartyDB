const express = require("express");
const router = express.Router();

// #1 import in product models from models 
const {Product}=require('../models')

// import in the Forms
const { bootstrapField, createProductForm } = require('../forms');



router.get('/', async(req,res)=>{
// #2 fetch all the products 
let partyproducts = await Product.collection().fetch();
res.render('partyproducts/index', { 
    // refers to hbs file in the view
    'partyproducts': partyproducts.toJSON() 
    // #3 convert collection to JSON
})
}) //end of router.get

//get the form
router.get('/create', async (req, res) => {
    const productForm = createProductForm();
    // get an instance of the form 
    res.render('partyproducts/create',{
        'form': productForm.toHTML(bootstrapField)
    })
})

//create product form, use the handle function to process requests 
// 2nd arguement - success function, to runf the form when successfully processed 

router.post('/create', async(req,res)=>{
    const productForm = createProductForm();
    productForm.handle(req, {
        'success': async (form) => {
            const product = new Product();
            product.set('name', form.data.name);
            product.set('unit_price', form.data.unit_price);
            product.set('description', form.data.description);
            product.set('quantity_in_stock', form.data.quantity_in_stock);
            product.set('quantity_total', form.data.quantity_total);
            product.set('quantity_left', form.data.quantity_left);
            await product.save();
            res.redirect('/products');

        }
    })
})

//name, unit price, description, quantity in stock, quantity total, quantity left

module.exports = router;