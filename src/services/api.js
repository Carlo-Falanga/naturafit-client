import axios from "axios";

const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

export async function getRecipes() {
    const res = await client.get("/recipes");
    return res.data.data;
}

export async function getRecipe(id) {
    const res = await client.get(`/recipes/${id}`);
    return res.data.data;
}

