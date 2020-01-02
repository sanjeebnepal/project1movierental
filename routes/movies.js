import {
  getAllMovies,
  getMovieById,
  postNewMovie,
  deleteMovieById,
  updateMovieById
} from "../controllers/movies";
export default app => {
  app.get("/movies", getAllMovies);
  app.get("/movies/:id", getMovieById);
  app.post("/movies", postNewMovie);
  app.delete("/movies/:id", deleteMovieById);
  app.put("/movies/:id", updateMovieById);
};
