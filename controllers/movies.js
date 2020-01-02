import Movies from "../models/movies";
import {
  errGet,
  errUpdate,
  errDelete,
  Updated,
  errPost,
  doneSave,
  Deleted
} from "../config/constants";

export const getAllMovies = (req, res) => {
  Movies.find({}, (err, movies) => {
    if (err) res.status(500).json(errGet);
    res.status(200).json({ movies });
  });
};

export const getMovieById = (req, res) => {
  Movies.findById(req.params.id, (err, movie) => {
    if (err) res.status(500).json(errGet);
    res.status(200).json({ movie });
  });
};
export const postNewMovie = (req, res) => {
  new Movies(req.body).save((err, data) => {
    if (err) res.status(500).json(errPost);
    res.status(201).json(doneSave);
  });
};
export const deleteMovieById = (req, res) => {
  Movies.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) res.status(500).json(errDelete);
    res.status(200).json(Deleted);
  });
};
export const UpdateMovieById = (req, res) => {
  Books.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) res.status(500).json(errUpdate);
    res.status(200).json(Updated);
  });
};
