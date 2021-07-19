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

module.exports = { Product};

