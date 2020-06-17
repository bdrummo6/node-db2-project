
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '5NMSH13EX8H106000', Make: 'CHEVY', Model: 'CRUZE', Mileage: 125321, TransmissionType: 'AUTOMATIC', TitleStatus: 'CLEAN' },
        {VIN: 'JN8AF5MV3CT150035', Make: 'FORD', Model: 'MUSTANG', Mileage: 24576, TitleStatus: 'CLEAN' },
        {VIN: 'JTDBE32K020118790', Make: 'FORD', Model: 'EXPLORER', Mileage: 95321, TransmissionType: 'AUTOMATIC' },
        {VIN: '2C4RC1CG2FR570495', Make: 'KIA', Model: 'SEDONA', Mileage: 31245, TitleStatus: 'SALVAGE' },
        {VIN: '1FMYU93153KB55602', Make: 'VOLKSWAGEN', Model: 'CROSSFOX', Mileage: 32457, TransmissionType: 'MANUAL', TitleStatus: 'CLEAN' },
        {VIN: 'JTDBT4K37CL051917', Make: 'AUDI', Model: 'A4', Mileage: 154264, TransmissionType: 'MANUAL' }
      ]);
    });
};
