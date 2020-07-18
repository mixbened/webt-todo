const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const controller = require('./controller/controller')

mongoose.connect('mongodb://localhost:27017/todos', {useNewUrlParser: true, useCreateIndex: true})

let db = mongoose.connection

db.once('open', () => {
  console.log('DB Connected!')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// app.get("/backend/test", (req, res) => res.send(["Hello", "World", "!"]));

app.get("/backend/todos/all", controller.read);

app.post("/backend/todos/create", controller.create);

app.put("/backend/todos/update/:id", controller.update);

app.delete("/backend/todos/delete/:id", controller.delete);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

