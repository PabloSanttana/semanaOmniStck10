const axios = require('axios')
const Dev = require('../models/Dev')

// index, show, store, update, destroy

const parseStringAsArray = require('../Utils/parseStringAsArray')

module.exports = {
    async index(request, response) {
        const devs = await Dev.find()

        return response.json(devs)
    },

    async store(request, response) {
        /// { informa que usuario manda}
      const { github_username, techs, latitude, longitude } = request.body

            // procurando github_username na base de dados 
        let dev = await Dev.findOne({ github_username })

        if (!dev) {
                // async + await quer dizer que o codigo só vai contiuar quando o response terminar 
                const apiRespose = await axios.get(`https://api.github.com/users/${github_username}`)
                
                const { name = login, avatar_url, bio } = apiRespose.data
            
                const location = {
                    type: 'Point',
                    coordinates: [longitude, latitude],
                }
                // removendo os espaços 
                const techsArray = parseStringAsArray(techs)
            
                 dev = await Dev.create({
                        github_username,
                        name,
                        bio,
                        avatar_url,
                        techs: techsArray,
                        location,
                })
            
             
        }

        return response.json(dev)
    },

    async update() {
        // nome avatar bio e location techs
    },
     
    async destroy(){
            
    }
}