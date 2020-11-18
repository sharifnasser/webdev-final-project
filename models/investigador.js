const mongoose = require('mongoose')

// Create a schema which is like a table
const investigadorSchema = new mongoose.Schema({
	// We define here the different columns of our schema which is going to be a JSON object
	nombre: {
		type: String, 
		required: true
	},
	telefono: {
		type: Number
	},
	correo: {
		type: String, 
		required: true
	},
	topicos: {
		type: [String], 
		required: true
	}
})

// Exportamos el esquema
module.exports = mongoose.model('Investigador', investigadorSchema)