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
		var investigadores = await Investigador.find(opcionesBusqueda)
		const db = await Investigador.find({})
		var topicosArr = [];
		db.forEach(elemento => {
			elemento.topicos.forEach(topico =>{
				topicosArr.push(topico)
			})
		})
		var unicosTopicos = new Set(topicosArr);
		console.log(unicosTopicos)
		console.log(investigadores)
		let topico = [req.query.topico || []].flat();
		if(Array.isArray(topico) && topico.length){
			investigadores = await Investigador.find({"topicos":{ $in: topico}})
		}
		res.render('lista/index', {
			investigadores: investigadores, 
			opcionesBusqueda: req.query, 
			topicos: unicosTopicos
		})
	} catch(e){

		console.log(e)
		res.redirect('/')
	}
	
})

module.exports = router