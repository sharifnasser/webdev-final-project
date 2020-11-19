// Ruta para lista de investigadores

const express = require('express')
// indexRouter variable will be equal to router variable
const router = express.Router()
const Investigador = require('../models/investigador')

router.get('/', async (req, res) =>{
	let opcionesBusqueda = {}
	if(req.query.nombre != null && req.query.nombre !== ''){
		opcionesBusqueda.nombre = new RegExp(req.query.nombre, 'i')
	}
	try{
		const investigadores = await Investigador.find(opcionesBusqueda)
		console.log(investigadores)
		console.log(opcionesBusqueda.nombre)
		res.render('lista/index', {
			investigadores: investigadores, 
			opcionesBusqueda: req.query
		})
	} catch{
		res.redirect('/')
	}
	
})

module.exports = router