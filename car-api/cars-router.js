const express = require('express');
const router = express.Router();

const db = require('../data/dbConfig');

// Returns All Cars in the database
router.get('/', async (req, res) => {
	try {
		const cars  = await db('cars');
		res.json(cars);
	} catch (err) {
		next(err);
	}
})

// Returns the Car with the specified id
router.get('/:id', async (req, res) => {
	try {
		const car  = await db('cars').where('id', req.params.id).limit(1);
		res.json(car);
	} catch (err) {
		next(err);
	}
})

// Creates a new car
router.post('/', async (req, res, next) => {

	try {
		const payload = {
			VIN: req.body.VIN,
			Make: req.body.Make,
			Model: req.body.Model,
			Mileage: req.body.Mileage,
			TransmissionType: req.body.TransmissionType,
			TitleStatus: req.body.TitleStatus
		}
		const [carID] = await db('cars').insert(payload);
		const car = await db.first('*').from('cars').where('id', carID);

		res.status(201).json(car);
	} catch (err) {
		next(err);
	}
})

module.exports = router;