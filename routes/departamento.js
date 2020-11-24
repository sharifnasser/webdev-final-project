// Ruta para el departamento

const express = require('express')
// indexRouter variable will be equal to router variable
const router = express.Router()
const Investigador = require('../models/investigador')
const Departamento = require('../models/departamento')

router.get('/:topico', async (req, res)=> {
	const investigadores = await Investigador.find({"topicos":{ $in: req.params.topico}})
	const departamentos = await Departamento.find({"nombre":{ $in: req.params.topico}})
	console.log("ESTO ES DEPARTAMENTO")
	console.log(departamentos)
	console.log(investigadores)
	res.render('departamento/index', {
		investigadores: investigadores,
		departamento: departamentos
	})
})

module.exports = router