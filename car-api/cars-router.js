const express = require('express');
const router = express.Router();

const db = require('../data/dbConfig');

// Returns All Cars in the database
router.get('/', async (req, res) => {
	try {
		const cars  = await db('cars')
		res.json(cars)
	} catch (err) {
		next(err)
	}
})

// Returns the Car with the specified id
router.get('/:id', async (req, res) => {
	try {
		const car  = await db('cars').where('id', req.params.id).limit(1);
		res.json(car)
	} catch (err) {
		next(err)
	}
})

module.exports = router;