import React, { useState, useEffect } from "react";
import PlantPage from "../PlantPage";
import NewPlantForm from "./NewPlantForm"; // Import NewPlantForm
import Search from "./Search"; // Import Search

const App = () => {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch plants data from the API
    fetch("/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  const addPlant = (newPlant) => {
    // Update state with the new plant (added via the form)
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  };

  const markSoldOut = (id) => {
    setPlants(
      plants.map((plant) =>
        plant.id === id ? { ...plant, soldOut: true } : plant
      )
    );
  };

  // Filter plants based on search query
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Search setSearchQuery={setSearchQuery} />
      <NewPlantForm onAddPlant={addPlant} />{" "}
      {/* Pass the addPlant function to NewPlantForm */}
      <PlantPage
        plants={filteredPlants} // Pass filtered plants to PlantPage
        markSoldOut={markSoldOut}
      />
    </div>
  );
};

export default App;
