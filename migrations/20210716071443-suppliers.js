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
  return db.createTable('suppliers',{
    supplier_id: { 
      type: 'int', 
      primaryKey:true, 
      autoIncrement:true
    },
    first_name: {
      type:'string',
      length:100,
      notNull: true
    },
    last_name: {
      type:'string',
      length:100,
      notNull: true
    }, 
    company_name: {
      type:'string',
      length:100,
      notNull: true
    }, 
    phone: {
      type:'int',
      length:100,
      notNull: true
    }, 
    email: {
      type:'string',
      length:100,
      notNull: true
    }
  })
  
};

exports.down = function(db) {
  return db.dropTable('suppliers')
};

exports._meta = {
  "version": 1
}
