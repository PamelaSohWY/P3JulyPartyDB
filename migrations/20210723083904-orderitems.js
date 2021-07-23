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

  return db.createTable('orderitems',{
  orderitem_id: { 
    type: 'int', 
    primaryKey:true, 
    autoIncrement:true
  },
  unit_price: {
    type:'float(10,2)',
          notNull: true
  },
  quantity: {
    type:'int',
    notNull: true
  },
 
})
};

exports.down = function(db) {
  return db.dropTable('orderitems')
};

exports._meta = {
  "version": 1
};
