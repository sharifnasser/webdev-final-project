// Ruta para el departamento

const express = require('express')
// indexRouter variable will be equal to router variable
const router = express.Router()
const Investigador = require('../models/investigador')
const Departamento = require('../models/departamento')

router.get('/:topico', async (req, res)=> {
	const departamentos = await Departamento.find({"nombre":req.params.topico})
	const investigadores = await Investigador.find({"topicos":{ $in: req.params.topico}})
	if(departamentos.length == 0){
		res.redirect('/lista')
	}
	res.render('departamento/index', {
		investigadores: investigadores,
		departamento: departamentos[0]
	})
	
})

module.exports = router