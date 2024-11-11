import React, { useState } from "react";
import "./App.css";
import PlantList from "./PlantList";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";
import Header from "./Header";

const App = () => {
  const [plants, setPlants] = useState([
    {
      id: 1,
      name: "Aloe",
      price: "$10.99",
      imageUrl: "https://example.com/aloe.jpg",
      inStock: true,
    },
    {
      id: 2,
      name: "ZZ Plant",
      price: "$15.99",
      imageUrl: "https://example.com/zz-plant.jpg",
      inStock: false,
    },
    // Add more plants as needed
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const addPlant = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Header />
      <Search setSearchTerm={setSearchTerm} />
      <NewPlantForm addPlant={addPlant} />
      <PlantList plants={filteredPlants} />
    </div>
  );
};

export default App;
