import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRecipes } from "../services/api";

export default function RecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRecipes().then((data) => {
      setRecipes(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="container py-4">Caricamento...</div>;
  }

  return (
    <div className="container py-4">
      <h1 className="mb-4">Ricette</h1>

      <div className="row g-4">
        {recipes.map((recipe) => (
          <div className="col-12 col-md-6 col-lg-4" key={recipe.id}>
            <div className="card h-100">
              {recipe.image && (
                <img
                  src=""
                  alt={recipe.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
              )}

              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>

                <p className="mb-2">
                  <span className="badge bg-secondary me-1">
                    {recipe.category.name}
                  </span>
                  <span className="badge bg-success">
                    {recipe.calories} kcal
                  </span>
                </p>
                <p className="card-text text-muted">
                  {recipe.prep_time + recipe.cook_time} min
                </p>

                <Link
                  to={`/recipes/${recipe.id}`}
                  className="btn btn-outline-success btn-sm"
                >
                  Vedi la ricetta
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
