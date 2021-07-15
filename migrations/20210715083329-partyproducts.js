'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('partyproducts',{
    partyproduct_id: {
      type: 'int', 
      primaryKey:true, 
      autoIncrement:true
    },
    name:{
      type:'varchar(250)',
      notNull:true
    }, 
    unit_price:{
      type:'int',
      notNull:true
    }, 
    description:{
      type:'text',
      notNull:true
    }, 
    quantity_in_stock:{
      type:'int',
      notNull:true
    },
    quantity_left:{
      type:'int', 
      notNull:true
    }

  })
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};


// 'product_id': {
//   'type':'int',
//   'notNull': true,
//   'foreignKey': {
//     'name': 'products_tags_product_fk',
//     'table':'products',
//     'mapping':'id',
//     'rules': {
//       'onDelete':'CASCADE',
//       'onUpdate':'RESTRICT'
//     }
//   }
},