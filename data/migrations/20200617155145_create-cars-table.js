
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.bigInteger('VIN').unique().notNullable();
      tbl.text('Make', 128).notNullable();
      tbl.text('Model').notNullable();
      tbl.bigInteger('Mileage').notNullable();
      tbl.text('Transmission Type');
      tbl.text('Title Status');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
  };
  