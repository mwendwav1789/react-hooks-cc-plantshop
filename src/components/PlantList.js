import React from "react";
import PlantCard from "./PlantCard";

const PlantList = ({ plants }) => {
  return (
    <div className="plant-list">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </div>
  );
};
