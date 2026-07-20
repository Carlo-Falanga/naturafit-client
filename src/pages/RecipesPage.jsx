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

  return (
    <>
      <section className="hero text-white text-center d-flex align-items-center justify-content-center">
        <div className="container">
          <h1 className="display-4 fw-bold">Mangia sano, vivi meglio</h1>
          <p className="lead mb-0">
            Scopri le nostre ricette naturali e leggere
          </p>
        </div>
      </section>

      <div className="container py-4">
        <h1 className="mb-4">Ricette</h1>

        {loading ? (
          <p>Caricamento...</p>
        ) : (
          <div className="row g-4">
            {recipes.map((recipe) => (
              <div className="col-12 col-md-6 col-lg-4" key={recipe.id}>
                <div className="card h-100">
                  {recipe.image && (
                    <img
                      src={`${import.meta.env.VITE_STORAGE_URL}/${recipe.image}`}
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
        )}
      </div>
    </>
  );
}
