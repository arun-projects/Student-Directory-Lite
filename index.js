// Express config
const express = require("express");
const app = express();

// System deps
const path = require("path");
const fs = require("fs");

// Serve static assets
app.use(express.static(path.join(__dirname, "public")));

// Body parser config
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// LowDB config
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const { nanoid } = require("nanoid");
const adapter = new FileSync("db.json");
const db = low(adapter);

// LowDB defaults
db.defaults({
  students: []
})
.write();

app.get("/students", (req, res) => {
  res.json(db.get("students"));
});

app.get("/students/:id", (req, res) => {
  const oneStudent = db
  .get("students")
  .find({id: req.params.id})
  .value();

  if (oneStudent) {
    return res.json(oneStudent);
  }

  res
  .status(404)
  .json({error: "Student not found"});
});

app.post("/students", (req, res) => {
  const newStudent = db
  .get("students")
  .push({
    ...req.body,
    id: nanoid(4)
  })
  .write();

  res.json(newStudent);
});

app.put("/students/:id", (req, res) => {
  db
  .get("students")
  .find({id: req.params.id})
  .assign(req.body)
  .write();

  res.sendStatus(200);
});

app.delete("/students/:id", (req, res) => {
  db
  .get("students")
  .remove({id: req.params.id})
  .write();

  res.sendStatus(200);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}...`);
});
