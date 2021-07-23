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
  db.addColumn('orders', 'customer_id', {
    type: 'int',
    notNull : true,
    foreignKey: {
        name: 'orders_customers_fk', 
        // name of foreign key
        table: 'customers', 
        // table it is from
        rules: {
            onDelete:'cascade',
            onUpdate:'restrict'
        },
        mapping: 'customer_id'
    }
})
  return db.addColumn('orders', 'payment_id', {
    type: 'int',
    notNull : true,
    foreignKey: {
        name: 'orders_payments_fk', 
        // name of foreign key
        table: 'payments', 
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
  db.removeForeignKey('orders', 'orders_customers_fk');
  db.removeForeignKey('orders', 'orders_payments_fk');
  db.removeColumn("orders", "customer_id");
  return db.removeColumn("orders", "payment_id");

};

exports._meta = {
  "version": 1
};
