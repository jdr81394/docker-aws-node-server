const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json())


app.get("/", (req, res) => {
    res.send("AWS docker deployment");
})


app.listen("3000", () => {
    console.log("Application is listening on port 3000");
})