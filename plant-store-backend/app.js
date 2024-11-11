const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let plants = [
  {
    id: 1,
    name: "Aloe",
    image: "./images/aloe.jpg",
    price: 15.99,
    soldOut: false,
  },
  {
    id: 2,
    name: "ZZ Plant",
    image: "./images/zz-plant.jpg",
    price: 25.98,
    soldOut: false,
  },
];

app.get("/plants", (req, res) => {
  res.json(plants);
});

app.post("/plants", (req, res) => {
  const newPlant = { id: plants.length + 1, ...req.body, soldOut: false };
  plants.push(newPlant);
  res.status(201).json(newPlant);
});

app.patch("/plants/:id", (req, res) => {
  const plant = plants.find((p) => p.id === parseInt(req.params.id));
  if (plant) {
    plant.soldOut = !plant.soldOut;
    res.json(plant);
  } else {
    res.status(404).send("Plant not found");
  }
});

const PORT = 6001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${6001}`);
});
