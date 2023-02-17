const express = require("express");
const Model = require("../model/model");
const router = express.Router();

module.exports = router;

//Post Method
router.post("/post", async (req, res) => {
  const data = new Model({
    name: req.body.name,
    age: req.body.age,
    location: req.body.location,
    lng: req.body.lng,
    lat: req.body.lat,
    disease: req.body.disease,
    verified: req.body.verified,
  });
  data
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

//Get all Method
router.get("/getAll", (req, res) => {
  Model.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

//Get by ID Method
router.get("/getOne/:id", (req, res) => {
  res.send(req.params.id);
});

//Update by ID Method
router.patch("/update/:id", (req, res) => {
  res.send("Update by ID API");
});

//Delete by ID Method
router.delete("/delete/:id", (req, res) => {
  res.send("Delete by ID API");
});
