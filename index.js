const express = require("express");
const hbs = require("hbs");
const wax = require("wax-on");
require("dotenv").config();

//create instance of express app 
let app= express();

//set the view engine 
app.set("view engine", "hbs");

// static folder 
app.use(express.static("public"));

//setup wax-on 
wax.on(hbs.handlebars);
wax.setLayoutPath("./views/layouts");

//enable form 
app.use (
    express.urlencoded({
        extended:false
    })
);

//import in routes 
const startingRoutes = require('./routes/starting')
const productRoutes = require('./routes/products')

async function main() {
    // app.use('/',startingRoutes);
    app.use('/', startingRoutes)
    app.use('/products', productRoutes)
}

main();

app.listen(3000,()=>{
    console.log("Server has started")
})