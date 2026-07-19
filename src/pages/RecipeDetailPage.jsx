import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getRecipe } from "../services/api";

export default function RecipeDetailPage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRecipe(id).then((data) => {
      setRecipe(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <div className="container py-4">Caricamento...</div>;
  }

  return (
    <div className="container py-4">
      <Link to="/" className="btn btn-outline-secondary btn-sm mb-4">
        Torna alle ricette
      </Link>

      <h1>{recipe.title}</h1>

      <p>
        <span className="badge bg-secondary me-1">{recipe.category.name}</span>
        {recipe.tags.map((tag) => (
          <span className="badge bg-light text-dark me-1" key={tag.id}>
            {tag.name}
          </span>
        ))}
      </p>

      {recipe.image && (
        <img
          src={`${import.meta.env.VITE_STORAGE_URL}/${recipe.image}`}
          alt={recipe.title}
          className="img-fluid rounded mb-4"
        />
      )}

      <p>{recipe.description}</p>

      <div className="row mb-4">
        <div className="col-6 col-md-3">
          <strong>Preparazione</strong>
          <p>{recipe.prep_time} min</p>
        </div>
        <div className="col-6 col-md-3">
          <strong>Cottura</strong>
          <p>{recipe.cook_time} min</p>
        </div>
        <div className="col-6 col-md-3">
          <strong>Porzioni</strong>
          <p>{recipe.servings}</p>
        </div>
        <div className="col-6 col-md-3">
          <strong>Difficoltà</strong>
          <p>{recipe.difficulty}</p>
        </div>

      </div>

      <h2 className="h4">Valori nutrizionali</h2>
      <ul className="mb-4">
        <li>Calorie: {recipe.calories} kcal</li>
        <li>Proteine: {recipe.protein} g</li>
        <li>Carboidrati: {recipe.carbs} g</li>
        <li>Grassi: {recipe.fats} g</li>
        <li>Fibre: {recipe.fiber} g</li>
        <li>Zuccheri: {recipe.sugar} g</li>
      </ul>

      <h2 className="h4">Preparazione</h2>
      <p style={{whiteSpace: "pre-line"}}>{recipe.instructions}</p>
    </div>
  );
}
