
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '5NMSH13EX8H106000', Make: 'Chevy', Model: 'Cruze', Mileage: 125321, TransmissionType: 'Automatic', TitleStatus: 'Clean' },
        {VIN: 'JN8AF5MV3CT150035', Make: 'Ford', Model: 'Mustang', Mileage: 24576, TransmissionType: 'Manual', TitleStatus: 'Clean' },
        {VIN: 'JTDBE32K020118790', Make: 'Ford', Model: 'Explorer', Mileage: 95321, TransmissionType: 'Automatic' }
      ]);
    });
};

