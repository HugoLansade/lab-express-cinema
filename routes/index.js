const express = require('express');
const router = express.Router();
const MovieModel = require("./../models/movie.model");

const allMovies = async (req, res) => {
    try {
        const film = await MovieModel.find();
        
        res.render("movies.hbs", { film });
    } catch(err) {
        res.send("fatal error");
    }
};

const oneMovieDetail = async (req, res) => {
    const movie = await MovieModel.findById(req.params.id);
    res.render("moviesDetails.hbs", {movie});
}


router.get(["/index"], (request, response) => {
        response.render("index.hbs", {
            css : ["style.css"]
        });
    });


/* GET home page */
router.get('/', (req, res, next) => res.render('index.hbs'));

router.get("/movies", allMovies);
router.get("/movies/:id", oneMovieDetail);


module.exports = router;
