const router = require("express").Router();
const Movie = require('../models/Movie.model')

/* GET all movies */
router.get('/movies', (req, res, next) => {
    Movie.find()
    .then(moviesFromDB => {
        console.log(moviesFromDB);
        res.render('movies', {movies: moviesFromDB})
    })
    .catch(err => {
        next(err)
    })
})

router.get('/movies/:id', (req, res, next) => {
    const id = req.params.id

    Movie.findById(id)
    .then(movieFromDB => {
        res.render('movie', {movie: movieFromDB})
    })
    .catch(err => {
        next(err)
    })
})

module.exports = router;
