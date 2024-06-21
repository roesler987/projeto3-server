const { getFavoritos, postFavorito, deleteFavorito } = require('../controladores/favorito');

const express = require('express')
const router = express.Router()

router.get('/favoritos', getFavoritos)
router.post('/favoritos/:id', postFavorito)
router.delete('/favoritos/:id', deleteFavorito)

module.exports = router