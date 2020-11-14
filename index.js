const express = require('express');
const app = express();
// const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');

const port = 8000;
var urlencodedParser = bodyParser.urlencoded({
    extended: false
})
// app.use(express.urlencoded());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    return res.send('hello');
})
app.get("/form", (req, res) => {
    return res.sendFile(path.join(__dirname + '/public/index.html'));

})


app.post("/Createform", urlencodedParser, (req, res) => {
    console.log(req.body)
    return res.redirect("/")
    // return res.sendFile(path.join(__dirname + '/public/index.html'));
    // return res.sendFile(express.static(path.join(__dirname, '/public')));

})

app.listen(port, () => {
    console.log('server is up and running at', port);

})