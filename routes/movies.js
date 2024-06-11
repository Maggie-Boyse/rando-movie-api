const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

// router.get("/", async (req, res) => {
//   try {
//     const postsData = await knex("posts")
//       .join("users", "users.id", "user_id")
//       .select(
//         "posts.id",
//         "users.username",
//         "posts.post_body",
//         "posts.created_at"
//       );
//     res.status(200).json(postsData);
//   } catch (error) {
//     console.error("Error fetching posts:", error);
//     res.status(500).json(error);
//   }
// });

router.post("/", async (req, res) => {
  try {
    const newMovieData = req.body;
    console.log(newMovieData);
    await knex("movie_table")
    //   .join("users", "users.id", "username")
      .insert(newMovieData);
    res.status(200).json(newMovieData);
  } catch (error) {
    console.error("Error sending movie data:", error);
    res.status(500).json(error);
  }
});

module.exports = router;
