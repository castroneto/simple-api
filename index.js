const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require("./routes");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

routes(app)

app.listen(3000)