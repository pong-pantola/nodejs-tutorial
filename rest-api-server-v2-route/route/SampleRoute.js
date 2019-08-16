let express = require('express');

let router = express.Router();

router.get("/getMessage", (req, res, next) => {
    res.status(200).send({msg: "Hello World!"})
});

router.get("/greet/:fname/:lname", (req, res, next) => {
    const fname = req.params.fname
    const lname = req.params.lname
    res.status(200).send({msg: "Hello " + fname + " " + lname + "!"})
});

router.get("/greet2", (req, res, next) => {
    const fname = req.query.fname
    const lname = req.query.lname
    if (fname && lname)
      res.status(200).send({msg: "Hello " + fname + " " + lname + "!"})
    else
    res.status(400).send({msg: "Query parameters fname and lname are required."})
});

router.post("/saveInfo", (req, res, next) => {
    console.log("req.body: " + JSON.stringify(req.body, null, 4))
    //place code here to save into DB
    res.status(200).send({msg: "Info saved successfully."})
});

module.exports = router