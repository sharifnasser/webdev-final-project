const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroMongoose = require('@admin-bro/mongoose')

const mongoose = require('mongoose')

const Investigador = require('../models/investigador')
const Departamento = require('../models/departamento')


AdminBro.registerAdapter(AdminBroMongoose)

const adminBro = new AdminBro({
  databases: [mongoose],
  rootPath: '/admin',
  resources: [Investigador, Departamento],
})

// Taking login credentials from environmental variables
const ADMIN = {
	email: process.env.ADMIN_EMAIL, 
	password: process.env.ADMIN_PASSWORD
}

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
	cookieName: process.env.ADMIN_COOKIE_NAME,
	cookiePassword: process.env.ADMIN_COOKIE_PASS,
	authenticate: async(email, password) =>{
		if(email === ADMIN.email && password === ADMIN.password){
			return ADMIN
		}
		return null
	} 
})

module.exports = router