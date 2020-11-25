// Ruta para el perfil del investigador

const express = require('express')
// indexRouter variable will be equal to router variable
const router = express.Router()
const Investigador = require('../models/investigador')

router.get('/:id', async (req, res)=> {
	const investigador = await Investigador.findById(req.params.id)
	//console.log(investigador.proyectos)
	res.render('investigador/index', {
		investigador: investigador
	})
})

module.exports = router