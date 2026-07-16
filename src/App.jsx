import { Routes, Route } from "react-router-dom";
import GuestLayout from "./layouts/GuestLayout";
import RecipesPage from "./pages/RecipesPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<GuestLayout />}>
        <Route index element={<RecipesPage />} />
        <Route path="recipes/:id" element={<RecipeDetailPage />} />
      </Route>
    </Routes>
  );
}
