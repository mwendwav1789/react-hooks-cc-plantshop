import React from "react";

function PlantCard({ plant, markSoldOut }) {
  return (
    <div className="plant-card" data-testid="plant-item">
      <h4>{plant.name}</h4>
      <img src={plant.image} alt={plant.name} />
      <p>{`Price: ${plant.price}`}</p>
      <button onClick={() => markSoldOut(plant.id)}>
        {plant.soldOut ? "Sold Out" : "Mark as Sold Out"}
      </button>
    </div>
  );
}

export default PlantCard;
