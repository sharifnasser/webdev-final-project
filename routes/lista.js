// Ruta para lista de investigadores

const express = require('express')
// indexRouter variable will be equal to router variable
const router = express.Router()

router.get('/', (req, res) =>{
	res.render('lista/index')
})

module.exports = router