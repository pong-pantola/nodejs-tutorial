let express = require("express");

let app = express();

app.listen(8080, () => {
 console.log("Server running on port 8080");
});

app.use(express.json())

let sampleRoute = require('./route/SampleRoute.js')

app.use("/sample", sampleRoute)