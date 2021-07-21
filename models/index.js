const bookshelf = require ('../bookshelf')

// model is a JS class that represents one table. 
// each instance of model represents on row in the table

const Product = bookshelf.model('PartyProducts',{
    // first arguement is the model which is being created
    tableName:'partyproducts'
    //2d arguement sets which table model belongs to
})
// line 3- 6 : creates a new Product model and
// store it into the Product Object

const Category = bookshelf.model('Category',{
    // first arguement is the model which is being created
    tableName:'category'
    //2d arguement sets which table model belongs to
})

const Suppliers = bookshelf.model('Suppliers',{
    // first arguement is the model which is being created
    tableName:'suppliers'
    //2d arguement sets which table model belongs to
})

const Customers = bookshelf.model('Customers',{
    // first arguement is the model which is being created
    tableName:'customers'
    //2d arguement sets which table model belongs to
})

const Payments = bookshelf.model('Payments',{
    // first arguement is the model which is being created
    tableName:'payments'
    //2d arguement sets which table model belongs to
})

module.exports = { Product, Category, Suppliers, Customers, Payments };

