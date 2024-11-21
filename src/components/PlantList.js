import React from "react";
import PlantCard from "./PlantCard";

const PlantList = ({ plants, markSoldOut }) => {
  if (!plants || plants.length === 0) {
    return <p>No plants available.</p>; // Fallback message when no plants are present
  }

  return (
    <div className="plant-list">
      {plants.map((plant) => (
        <div key={plant.id} data-testid="plant-item">
          {" "}
          {/* Added data-testid here */}
          <PlantCard plant={plant} markSoldOut={markSoldOut} />
        </div>
      ))}
    </div>
  );
};

export default PlantList;
