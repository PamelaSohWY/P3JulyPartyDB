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
  return db.createTable('orders',{
    order_id: { 
      type: 'int', 
      primaryKey:true, 
      autoIncrement:true
    },
    total_amount: {
      type:'float(10,2)',
            notNull: true
    },
    quantity: {
      type:'int',
      notNull: true
    },

// make sure that the keys is signed or unsigned 
// corresponds with the table you are referencing to. 

  })
};

exports.down = function(db) {
  return db.dropTable('orders')
};

exports._meta = {
  "version": 1
};
