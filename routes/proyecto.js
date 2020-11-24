// Ruta para el departamento

const express = require('express')
// indexRouter variable will be equal to router variable
const router = express.Router()
const Investigador = require('../models/investigador')
const Departamento = require('../models/departamento')

router.get('/:topico/:proyectos', async (req, res)=> {
	console.log(req.params.proyectos)
	const investigadores = await Investigador.find({"topicos":{ $in: req.params.topico}})
	res.render('proyecto/index', {
		proyecto: req.params.proyectos,
		topico: req.params.topico,
		investigadores: investigadores
	})
	
})

module.exports = router