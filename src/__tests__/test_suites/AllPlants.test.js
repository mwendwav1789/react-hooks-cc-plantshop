import React, { useState, useEffect } from "react";
import PlantPage from "../components/PlantPage";
import Search from "./Search"; // Import the Search component

const App = () => {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query

  useEffect(() => {
    // Fetch plants data from the API
    fetch("/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  const addPlant = (newPlant) => {
    fetch("/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((data) => setPlants((prevPlants) => [...prevPlants, data]));
  };

  const markSoldOut = (id) => {
    setPlants(
      plants.map((plant) =>
        plant.id === id ? { ...plant, soldOut: true } : plant
      )
    );
  };

  // Filter plants based on search query
  const filteredPlants = plants.filter(
    (plant) => plant.name.toLowerCase().includes(searchQuery.toLowerCase()) // Case-insensitive search
  );

  return (
    <div>
      <Search setSearchQuery={setSearchQuery} />{" "}
      {/* Pass setSearchQuery to Search */}
      <PlantPage
        plants={filteredPlants} // Pass filtered plants to PlantPage
        addPlant={addPlant}
        markSoldOut={markSoldOut}
      />
    </div>
  );
};

export default App;
