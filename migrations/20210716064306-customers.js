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
  return db.createTable('customers',{
    customer_id: { 
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
    address: {
      type:'string',
      length:350,
      notNull: true
    },
    postal_code: {
      type:'int',
      length:20,
      notNull: true
    },
    country: {
      type:'string',
      length:45,
      notNull: true
    },
    phone: {
      type:'int',
      length:20,
      notNull: true
    },
    email: {
      type:'string',
      length:254,
      notNull: true
    },
    password: {
      type:'string',
      length:128,
      notNull: true
    },
    date_entered: {
      type:'datetime',
      notNull: true
    }
})
};

exports.down = function(db) {
  return db.dropTable('customers')
};

exports._meta = {
  "version": 1
}