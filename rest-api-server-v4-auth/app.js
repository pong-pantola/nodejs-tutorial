let express = require("express");

let app = express();

app.listen(8080, () => {
 console.log("Server running on port 8080");
});

let config = require("./config/config.json")
app.locals.secretKey = config.token.secretKey
app.locals.expiration = config.token.expiration

app.use(express.json())





let authRoute = require('./route/AuthRoute.js')
let sampleRoute = require('./route/SampleRoute.js')

app.use("/auth", authRoute)
app.use("/sample", sampleRoute)
