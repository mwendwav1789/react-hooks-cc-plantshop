import React from "react";

const PlantCard = ({ plant }) => {
  return (
    <div className="plant-card">
      <img src={plant.imageUrl} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>{plant.price}</p>
      <p>{plant.inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
};

export default PlantCard;
