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
    </div>
  );
}
