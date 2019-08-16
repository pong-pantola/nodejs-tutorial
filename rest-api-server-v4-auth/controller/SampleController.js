const authHelper = require("../helper/AuthHelper.js")

let controller = {}

controller.getMessage = (req, res, next) => {
  const result = authHelper.validateToken(req);

  if (result.statusCode != 200) {
    res.status(result.statusCode).send({ msg: result.errorMsg });
    return;
  }

  res.status(200).send({ msg: "Hello World!" });
}

controller.greet = (req, res, next) => {
  const result = authHelper.validateToken(req);

  if (result.statusCode != 200) {
    res.status(result.statusCode).send({ msg: result.errorMsg });
    return;
  }

  const fname = req.params.fname;
  const lname = req.params.lname;
  res.status(200).send({ msg: "Hello " + fname + " " + lname + "!" });
};

controller.greet2 = (req, res, next) => {
  const result = authHelper.validateToken(req);

  if (result.statusCode != 200) {
    res.status(result.statusCode).send({ msg: result.errorMsg });
    return;
  }

  const fname = req.query.fname;
  const lname = req.query.lname;
  if (fname && lname)
    res.status(200).send({ msg: "Hello " + fname + " " + lname + "!" });
  else
    res
      .status(400)
      .send({ msg: "Query parameters fname and lname are required." });
};

controller.saveInfo = (req, res, next) => {
  const result = authHelper.validateToken(req);

  if (result.statusCode != 200) {
    res.status(result.statusCode).send({ msg: result.errorMsg });
    return;
  }

  console.log("req.body: " + JSON.stringify(req.body, null, 4));
  //place code here to save into DB
  res.status(200).send({ msg: "Info saved successfully." });
};

module.exports = controller;
