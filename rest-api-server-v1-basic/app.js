let express = require("express");

let app = express();

app.listen(8080, () => {
 console.log("Server running on port 8080");
});

//app.use(express.json())

app.get("/getMessage", (req, res, next) => {
    res.status(200).send({msg: "Hello World!"})
});

app.get("/greet/:fname/:lname", (req, res, next) => {
    const fname = req.params.fname
    const lname = req.params.lname
    res.status(200).send({msg: "Hello " + fname + " " + lname + "!"})
});

app.get("/greet2", (req, res, next) => {
    const fname = req.query.fname
    const lname = req.query.lname
    if (fname && lname)
      res.status(200).send({msg: "Hello " + fname + " " + lname + "!"})
    else
    res.status(400).send({msg: "Query parameters fname and lname are required."})
});

app.post("/saveInfo", (req, res, next) => {
    console.log("req.body: " + JSON.stringify(req.body, null, 4))
    //place code here to save into DB
    res.status(200).send({msg: "Info saved successfully."})
});