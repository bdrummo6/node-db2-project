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

module.exports = router;