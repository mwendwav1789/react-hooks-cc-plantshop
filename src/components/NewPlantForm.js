import React, { useState } from "react";

const NewPlantForm = ({ addPlant }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [inStock, setInStock] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlant = {
      id: Date.now(),
      name,
      price,
      imageUrl,
      inStock,
    };
    addPlant(newPlant);
    setName("");
    setPrice("");
    setImageUrl("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Plant</h2>
      <input
        type="text"
        placeholder="Plant name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <label>
        In Stock:
        <input
          type="checkbox"
          checked={inStock}
          onChange={() => setInStock(!inStock)}
        />
      </label>
      <button type="submit">Add Plant</button>
    </form>
  );
};

export default NewPlantForm;
