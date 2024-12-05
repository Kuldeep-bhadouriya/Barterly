const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  fs.readdir(`./files`, function (err, files) {
    res.render("index", { files: files });
  });
});

app.get("/edit/:filename", function (req, res) {
  res.render("edit", { filename: req.params.filename });
});

app.post("/edit", function (req, res) {
  fs.rename(
    `./files/${req.body.previous}`,
    `./files/${req.body.new}`,
    function (err) {
      res.redirect("/");
    }
  );
});

app.get("/file/:filename", function (req, res) {
  fs.readFile(
    `./files/${req.params.filename}`,
    "utf-8",
    function (err, filedata) {
      res.render("show", {
        filename: req.params.filename,
        filedata: filedata,
      });
    }
  );
});

app.post("/create", function (req, res) {
  console.log(req.body); // Log the request body to check for 'title' and 'details'

  const title = req.body.title ? req.body.title.split(" ").join("") : "default";
  const details = req.body.details || ""; // Provide default content if details are missing

  fs.writeFile(`./files/${title}.txt`, details, function (err) {
    if (err) {
      console.error(err);
      res.status(500).send("Error writing file");
    } else {
      res.redirect("/");
    }
  });
});

app.listen(3000);
