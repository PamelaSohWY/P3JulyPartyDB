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
    partyproducts_id: { 
      type: 'int', 
      primaryKey:true, 
      autoIncrement:true
    },
    name: {
      type:'string',
      length:100,
      notNull: true
    },
    unit_price: {
      type:'decimal',
      notNull: true
    },
    description: {
      type:'text',
      notNull: true
    },
    quantity_in_stock: {
      type:'int',
      notNull: true
    },
    quantity_total: {
      type:'int',
      notNull: true
    },
    quantity_left: {
      type:'int',
      notNull: true
    }
})
};

exports.down = function(db) {
  return db.dropTable('partyproducts')
};

exports._meta = {
  "version": 1
}