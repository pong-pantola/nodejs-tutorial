let express = require('express');

let router = express.Router();

let SampleController = require("../controller/SampleController.js")

router.get("/getMessage", SampleController.getMessage);

router.get("/greet/:fname/:lname", SampleController.greet);

router.get("/greet2", SampleController.greet2);

router.post("/saveInfo", SampleController.saveInfo);

module.exports = router