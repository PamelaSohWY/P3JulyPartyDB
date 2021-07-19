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
  return db.addColumn('orders', 'payment_id', {
    type: 'int',
    notNull : true,
    foreignKey: {
        name: 'order_payment_fk', 
        // name of foreign key
        table: 'payment', 
        // table it is from
        rules: {
            onDelete:'cascade',
            onUpdate:'restrict'
        },
        mapping: 'payment_id'
    }
})

};

exports.down = function(db) {
  // refer to db migrate drop foreign keys 
  return db.removeForeignKey('orders', 'order_payment_fk')
};

exports._meta = {
  "version": 1
};
