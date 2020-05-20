const router = require("express").Router();
const Exercise = require("../model/exercise");

// router.get("/", (req, res) => {
//   exercise
//     .find()
//     .then((user) => res.json(user))
//     .catch((err) => res.status(400).json("error " + err));
// });

router.post("/", (req, res) => {
  var exercise = new Exercise({
    username: req.body.username,
    description: req.body.description,
  });
try {
     exercise.save().then((ss) => {
    res.send(ss);
  });
} catch (error) {
    res.json({message:error})
}
 
});

module.exports = router;
