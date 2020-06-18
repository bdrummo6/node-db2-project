
exports.up = function(knex) {
	return knex.schema.createTable('sales', tbl => {
		tbl.increments();
		tbl.integer('car_id')
			.unsigned()
			.notNullable()
			.references('id')
			.inTable('cars')
			.onUpdate('CASCADE')
			.onDelete('CASCADE');
		tbl.date('sale_date', 128).notNullable();
		tbl.float('price', 128).notNullable();
	})
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('sales');
};