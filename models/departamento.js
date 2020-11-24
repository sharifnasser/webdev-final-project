const mongoose = require('mongoose')

const departamentoSchema = new mongoose.Schema({
	// We define here the different columns of our schema which is going to be a JSON object
	nombre: {
		type: String, 
		required: true
	},
	descripcion: {
		type: String, 
		required: true
	},
	proyectos: [{
		nombre: String,
		descripcion: String
	}]
})

// Exportamos el esquema
module.exports = mongoose.model('Departamento', departamentoSchema)