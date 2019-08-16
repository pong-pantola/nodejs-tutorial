const jwt = require('jsonwebtoken');

let helper = {}

helper.checkLogin = (username, password) => {
  if (username == "user1" && password == "abc123")
    return true;
  else
    return false;
}

helper.validateToken = (req) => {
  let result = {}
  let token = req.headers.authorization;
  if (!token) {
      result.statusCode = 401
      result.errorMsg = "No token provided."
  } else {
    try{
      const payload = jwt.verify(token, req.app.locals.secretKey)
      result.statusCode = 200
      result.payload = payload
    }catch(err){
      result.statusCode = 401
      result.errorMsg = "Invalid token: " + err
    }
  }

  return result;
}

module.exports = helper