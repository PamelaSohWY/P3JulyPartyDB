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
  return db.createTable('payments',{
    payment_id: { 
      type: 'int', 
      primaryKey:true, 
      autoIncrement:true
    },
    payment_type: {
      type:'string',
      length:100,
      notNull: true
    },
    status: {
      type:'string',
      length:50,
      notNull: true
    },
    error: {
      type:'string',
      length:50,
      notNull: true
    }
  })
};

exports.down = function(db) {
  return db.dropTable('payments')
};

exports._meta = {
  "version": 1
};
