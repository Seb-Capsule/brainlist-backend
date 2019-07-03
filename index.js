require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8081;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT, function () {
 console.log(`Brainlist backend listening on port ======> ${port}`);
});

