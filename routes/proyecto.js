// Ruta para el departamento

const express = require('express')
// indexRouter variable will be equal to router variable
const router = express.Router()
const Investigador = require('../models/investigador')
const Departamento = require('../models/departamento')

router.get('/:proyecto', async (req, res)=> {
	var investigador = await Investigador.find({"proyectos.nombre": req.params.proyecto})
	//console.log(investigador)
	var todosInvestigadores;
	console.log(investigador.length)
	if(investigador.length != 0){
		var topicosArr = [];
		investigador.forEach(elemento => {
			elemento.topicos.forEach(topico =>{
				topicosArr.push(topico)
			})
		})
		var unicosTopicos = new Set(topicosArr);
		todosInvestigadores = investigador
	}
	else{
		investigador = await Departamento.find({"proyectos.nombre": req.params.proyecto})
		console.log(investigador[0])
		var topicosArr = [];
		investigador.forEach(elemento => {
			topicosArr.push(elemento.nombre)
		})
		var unicosTopicos = new Set(topicosArr);
		todosInvestigadores = await Investigador.find({"topicos": { $in: topicosArr}})

	}

	

	res.render('proyecto/index', {
		nombreProyecto: req.params.proyecto,
		investigador: investigador,
		todosInvestigadores: todosInvestigadores,
		topicos: unicosTopicos
	})
	
})

module.exports = router