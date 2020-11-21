// Ruta para el departamento

const express = require('express')
// indexRouter variable will be equal to router variable
const router = express.Router()
const Investigador = require('../models/investigador')

router.get('/:topico', async (req, res)=> {
	console.log(req.params.topico)
	const investigadores = await Investigador.find({"topicos":{ $in: req.params.topico}})
	console.log(investigadores)
	res.render('departamento/index', {
		investigadores: investigadores,
		departamento: req.params.topico
	})
})

module.exports = router