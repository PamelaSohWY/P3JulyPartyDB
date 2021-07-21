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
    // handle function is to process the request
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
        },
        'error': async (form) => {
            res.render('products/create', {
                'form': form.toHTML(bootstrapField)
            })
        }
    })
})

// name, unit_price, description, quantity_in_stock, quantity_total, quantity left 

// Routes to update products 
router.get('/:product_id/update', async (req, res) => { 
    // product_id URL parameter- stores of the product we want to update 
    // retrieve the product
    const productId = req.params.product_id
    //retrieve the product instance with the specific product id and store it in the product variable
    const product = await Product.where({
        'partyproducts_id': productId
    }).fetch({
        require: true
    });
    
    //create a product form
    const productForm = createProductForm();

    // fill in the existing values
    productForm.fields.name.value = product.get('name');
    productForm.fields.cost.unit_price = product.get('unit_price');
    productForm.fields.description = product.get('description');
    productForm.fields.quantity_in_stock = product.get('quantity_in_stock');
    productForm.fields.quantity_total = product.get('quantity_total');
    productForm.fields.quantity_left = product.get('quantity_left');

    //we send the form and product variable to the hbs file for rendering 
    res.render('products/update', {
        'form': productForm.toHTML(bootstrapField),
        'product': product.toJSON()
    })

})

// Routes to delete product
router.get('/:product_id/delete', async(req,res)=> {
// fetch the product that we want to delete 
const product = await Product.where({
    'partyproducts_id':req.params.product_id
}).fetch({
    require:true
});
res.render('partyproducts/delete',{ 
    // hbs file reference
    'product': product.toJSON()
})
}); //end of router get 

router.post('/:product_id/delete', async(req,res)=>{
    // fetch the product that we want to delete
    await Product.where({
        'partyproducts_id': req.params.product_id 
        // follow the column name in the able 
    }).destroy();
    res.redirect('/products')
})

//the version of the bookshelf is wrong. So will need to use the above version for delete





module.exports = router;