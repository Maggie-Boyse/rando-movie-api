const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

router.get("/", async (req, res) => {
  try {
    const moviesData = await knex("horror_movies")
      // .join("users", "users.id", "user_id")
      .select(
        "horror_movies.id",
        "horror_movies.title",
        "horror_movies.year",
        "horror_movies.duration",
        "horror_movies.link",
        "horror_movies.description"
      );
    res.status(200).json(moviesData);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const newMovieData = req.body;
    console.log(newMovieData);
    await knex("horror_movies")
      //   .join("users", "users.id", "username")
      .insert(newMovieData);
    res.status(200).json(newMovieData);
  } catch (error) {
    console.error("Error sending movie data:", error);
    res.status(500).json(error);
  }
});

module.exports = router;
