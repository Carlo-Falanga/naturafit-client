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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
