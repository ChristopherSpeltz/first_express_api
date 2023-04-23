let express = require('express')
let router = express.Router()

router.get('/', function (req, res, next) {
    res.json( { 'message': 'This is my API message!'} )
})

module.exports = router