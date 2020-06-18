
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sales').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('sales').insert([
         {car_id: 2, sale_date: 2018-4-3, price: 29324.99},
         {car_id: 4, sale_date: 2018-5-7, price: 35120.55},
         {car_id: 2, sale_date: 2018-9-4, price: 40540.32},
         {car_id: 5, sale_date: 2018-10-6, price: 18350.99},
         {car_id: 1, sale_date: 2018-11-9, price: 63241.55},
         {car_id: 4, sale_date: 2018-12-20, price: 23165.99},
         {car_id: 6, sale_date: 2019-1-9, price: 32418.99},
         {car_id: 1, sale_date: 2019-2-12, price: 36549.55},
         {car_id: 3, sale_date: 2019-5-11, price: 12784.40},
      ]);
    });
};
