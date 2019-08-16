let controller = {}

controller.getMessage = (req, res, next) => {
    res.status(200).send({msg: "Hello World!"})
}

controller.greet = (req, res, next) => {
    const fname = req.params.fname
    const lname = req.params.lname
    res.status(200).send({msg: "Hello " + fname + " " + lname + "!"})
}

controller.greet2 = (req, res, next) => {
    const fname = req.query.fname
    const lname = req.query.lname
    if (fname && lname)
      res.status(200).send({msg: "Hello " + fname + " " + lname + "!"})
    else
    res.status(400).send({msg: "Query parameters fname and lname are required."})
}

controller.saveInfo = (req, res, next) => {
    console.log("req.body: " + JSON.stringify(req.body, null, 4))
    //place code here to save into DB
    res.status(200).send({msg: "Info saved successfully."})
}

module.exports = controller