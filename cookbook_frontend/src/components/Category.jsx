import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/Category.css';

function Category() {
  const { id } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/categories/${id}/`)
      .then(response => response.json())
      .then(data => setCategory(data))
      .catch(error => console.error('Error fetching category:', error));
  }, [id]);

  if (!category) return <div>Loading...</div>;

  return (
    <div>
      <h1>{category.name}</h1>
      <ul>
        {category.recipes.map(recipe => (
          <li key={recipe.id}>
            <Link to={`/dish/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
