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
  db.addColumn('orderitems', 'order_id', {
    type: 'int',
    notNull : true,
    foreignKey: {
        name: 'orderitems_orders_fk', 
        // name of foreign key
        table: 'orders', 
        // table it is from
        rules: {
            onDelete:'cascade',
            onUpdate:'restrict'
        },
        mapping: 'order_id'
    }
});

return db.addColumn('orderitems', 'partyproducts_id', {
  type: 'int',
  notNull : true,
  foreignKey: {
      name: 'orderitems_partyproducts_fk', 
      // name of foreign key
      table: 'partyproducts', 
      // table it is from
      rules: {
          onDelete:'cascade',
          onUpdate:'restrict'
      },
      mapping: 'partyproducts_id'
  }
})


};//end of exports up

exports.down = function(db) {
  db.removeForeignKey('orderitems', 'orderitems_orders_fk');
  db.removeForeignKey('orderitems', 'orderitems_partyproducts_fk');
  db.removeColumn("orderitems", "order_id");
  return db.removeColumn("orderitemss", "product_id");
};

exports._meta = {
  "version": 1
};
