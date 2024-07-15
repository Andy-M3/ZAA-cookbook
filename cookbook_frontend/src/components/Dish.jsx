import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Dish.css';

function Dish() {
  const { id } = useParams();
  const [dish, setDish] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/recipes/${id}/`)
      .then(response => response.json())
      .then(data => setDish(data))
      .catch(error => console.error('Error fetching dish:', error));
  }, [id]);

  if (!dish) return <div>Loading...</div>;

  return (
    <div>
      <h1>{dish.title}</h1>
      <h2>Ingredients</h2>
      <p>{dish.ingredients}</p>
      <h2>Instructions</h2>
      <p>{dish.instructions}</p>
    </div>
  );
}

export default Dish;
