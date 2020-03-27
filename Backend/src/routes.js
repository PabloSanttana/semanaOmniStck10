const {Router } = require('express')

const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

routes.get('/devs', DevController.index)
routes.post('/devs',DevController.store )
routes.get('/search', SearchController.index)



// get, post , put , delete
// query Params : request.query (filtros, ordenação, paginação, .....)
// Route Params: request.params (identificar um recurso na altreração  ou remoção) 
// Body: request.body (Dados para criação ou alteração de um registro)

module.exports = routes